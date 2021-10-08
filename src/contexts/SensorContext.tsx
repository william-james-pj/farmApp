import React, { createContext, ReactNode, useState, useEffect } from "react";
import uuid from "react-native-uuid";

import { SensorItemType } from "../@types/types";

type SensorContextType = {
  sensorData: SensorItemType[];
  addSensor: (item: addSensorType) => void;
  deleteSensor: (id: string) => void;
};

type SensorContextProviderProps = {
  children: ReactNode;
};

type addSensorType = {
  color: string;
  name: string;
};

export const SensorContext = createContext({} as SensorContextType);

const data: SensorItemType[] = [];

export function SensorContextProvider(props: SensorContextProviderProps) {
  const [sensorData, setSensorData] = useState<SensorItemType[]>([]);

  const loadData = () => {
    setSensorData(data);
  };

  const addSensor = (item: addSensorType) => {
    let aux = [...sensorData];
    aux.push({
      id: `${uuid.v4()}`,
      color: item.color,
      name: item.name,
      values: {
        humidity: "81",
        lighting: "32.000",
        soil: "81",
        temp: "32",
        wind: "32",
      },
    });

    setSensorData(aux);
  };

  const deleteSensor = (id: string) => {
    setSensorData(sensorData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SensorContext.Provider
      value={{
        sensorData,
        addSensor,
        deleteSensor,
      }}
    >
      {props.children}
    </SensorContext.Provider>
  );
}
