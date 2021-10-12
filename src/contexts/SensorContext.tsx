import React, { createContext, ReactNode, useState, useEffect } from "react";
import { database, firestore } from "../services/firebase";
import uuid from "react-native-uuid";

import { SensorItemType } from "../@types/types";

type ResponseType = {
  status: boolean;
  msg: number;
};

type sensorTypeChange = "humidity" | "lighting" | "soil" | "temp" | "wind";

type SensorContextType = {
  loadData: (sensors: SensorItemType[]) => void;
  sensorData: SensorItemType[];
  addSensor: (item: addSensorType, userId: string) => void;
  deleteSensor: (id: string, userId: string) => void;
  validateSensor: (code: string) => Promise<ResponseType>;
};

type SensorContextProviderProps = {
  children: ReactNode;
};

type addSensorType = {
  color: string;
  name: string;
};

export const SensorContext = createContext({} as SensorContextType);

export function SensorContextProvider(props: SensorContextProviderProps) {
  const [sensorData, setSensorData] = useState<SensorItemType[]>([]);
  const [sensorCode, setSensorCode] = useState<string | null>(null);

  const loadData = async (sensors: SensorItemType[]) => {
    let data: SensorItemType[] = [];

    for (const sensor of sensors) {
      const sensorRef = await database.ref(`/sensors/${sensor.id}`).get();

      data.push({
        id: sensor.id,
        color: sensor.color,
        name: sensor.name,
        values: sensorRef.val(),
      });
    }

    setSensorData(data);
  };

  const addSensor = async (item: addSensorType, userId: string) => {
    let aux = [...sensorData];

    try {
      const sensorRef = await database.ref(`/sensors/${sensorCode}`).get();

      aux.push({
        id: sensorCode || "",
        color: item.color,
        name: item.name,
        values: sensorRef.val(),
      });

      setSensorData(aux);

      let arrayAux = aux.map((sensor) => {
        return {
          id: sensor.id,
          color: sensor.color,
          name: sensor.name,
        };
      });

      await firestore.collection("Users").doc(userId).update({
        sensors: arrayAux,
      });
    } catch (error) {}
  };

  const deleteSensor = async (id: string, userId: string) => {
    let aux = sensorData.filter((item) => item.id !== id);

    let arrayAux = aux.map((sensor) => {
      return {
        id: sensor.id,
        color: sensor.color,
        name: sensor.name,
      };
    });

    await firestore.collection("Users").doc(userId).update({
      sensors: arrayAux,
    });

    setSensorData(aux);
  };

  const validateSensor = async (code: string): Promise<ResponseType> => {
    if (!code) return { status: false, msg: 1 };

    if (!uuid.validate(code)) return { status: false, msg: 1 };

    const exists = sensorData.filter((item) => item.id === code);

    if (exists.length !== 0) return { status: false, msg: 3 };

    try {
      const sensorRef = await database.ref(`/sensors/${code}`).get();

      if (!sensorRef.exists()) return { status: false, msg: 2 };

      setSensorCode(code);
      return { status: true, msg: 4 };
    } catch (error) {
      return { status: false, msg: 1 };
    }
  };

  useEffect(() => {
    if (sensorData.length > 0) {
      for (const sensor of sensorData) {
        const sensorRef = database.ref(`/sensors/${sensor.id}`);

        sensorRef.once("child_changed", (sensorSnap) => {
          let keySensor: sensorTypeChange = sensorSnap.key as sensorTypeChange;
          let aux = [...sensorData];

          aux.forEach((item) => {
            if (item.id === sensor.id) {
              if (item.values?.hasOwnProperty(keySensor)) {
                item.values[keySensor] = sensorSnap.val();
              }
            }
          });

          setSensorData(aux);
        });
      }
    }
  }, ["", sensorData]);

  return (
    <SensorContext.Provider
      value={{
        loadData,
        sensorData,
        addSensor,
        deleteSensor,
        validateSensor,
      }}
    >
      {props.children}
    </SensorContext.Provider>
  );
}
