import React, { createContext, ReactNode, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { tempUnitType } from "../@types/types";

type SettingType = {
  objSetting: ObjectSettingType;
  getSetting: () => void;
  setTemp: (tempUnit: tempUnitType) => void;
};

type SettingProviderProps = {
  children: ReactNode;
};

export const SettingContext = createContext({} as SettingType);

type ObjectSettingType = {
  tempUnit: tempUnitType;
};

export function SettingContextProvider(props: SettingProviderProps) {
  const [objSetting, setObjSetting] = useState<ObjectSettingType>({
    tempUnit: "celsius",
  });

  const setTemp = async (tempUnit: tempUnitType) => {
    try {
      const aux = { ...objSetting };
      aux.tempUnit = tempUnit;

      await AsyncStorage.setItem("user_setting", JSON.stringify(aux));
      setObjSetting(aux);
    } catch (error) {
      console.log(error);
    }
  };

  const getSetting = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user_setting");

      if (jsonValue === null) return true;

      setObjSetting(JSON.parse(jsonValue));
      return true;
    } catch (error) {
      console.log(error);
      return true;
    }
  };

  return (
    <SettingContext.Provider value={{ objSetting, getSetting, setTemp }}>
      {props.children}
    </SettingContext.Provider>
  );
}
