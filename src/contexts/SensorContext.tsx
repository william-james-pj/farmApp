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

const data: SensorItemType[] = [
  {
    id: "1",
    name: "Sensor_name_1",
    color: "#B97171",
    values: {
      humidity: "79",
      lighting: "31.000",
      soil: "77",
      temp: "29",
      wind: "32",
    },
  },
  {
    id: "2",
    name: "Sensor_name_2",
    color: "#84B971",
    values: {
      humidity: "87",
      lighting: "32.000",
      soil: "74",
      temp: "32",
      wind: "29",
    },
  },
  {
    id: "3",
    name: "Sensor_name_3",
    color: "#71B9A8",
    values: {
      humidity: "89",
      lighting: "32.000",
      soil: "91",
      temp: "22",
      wind: "23",
    },
  },
  {
    id: "4",
    name: "Sensor_name_4",
    color: "#9571B9",
    values: {
      humidity: "91",
      lighting: "32.000",
      soil: "87",
      temp: "26",
      wind: "37",
    },
  },
];

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
