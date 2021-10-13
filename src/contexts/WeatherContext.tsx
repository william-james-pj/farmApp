import React, { createContext, ReactNode, useState } from "react";

import { getCurrentWeather } from "../utils/getCurrentWeather";
import { getAllWeather } from "../utils/getAllWeather";

import { formatTemp } from "../utils/formatTemp";
import { formatTime } from "../utils/formatTime";
import { formatWind } from "../utils/formatWind";

import {
  CurrentWeatherType,
  HourlyWeatherType,
  DailyWeatherType,
  tempUnitType,
} from "../@types/types";

type WeatherType = {
  currentWeather: CurrentWeatherType;
  hourlyWeather: HourlyWeatherType[];
  dailyWeather: DailyWeatherType[];
  getCurrent: (location: LocationType, tempUnit: tempUnitType) => void;
  getAll: (
    location: LocationType,
    tempUnit: tempUnitType,
    all?: boolean
  ) => void;
  loadingWeather: boolean;
};

type WeatherProviderProps = {
  children: ReactNode;
};

type LocationType = {
  latitude: string;
  longitude: string;
};

export const WeatherContext = createContext({} as WeatherType);

export function WeatherContextProvider(props: WeatherProviderProps) {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>({});
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherType[]>([]);
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType[]>([]);
  const [loadingWeather, setloadingWeather] = useState(false);

  const getCurrent = async (location: LocationType, tempUnit: tempUnitType) => {
    setloadingWeather(true);

    const current = await getCurrentWeather(
      location.longitude,
      location.latitude
    );

    formatCurrent(current, tempUnit);

    setloadingWeather(false);
  };

  const getAll = async (
    location: LocationType,
    tempUnit: tempUnitType,
    all?: boolean
  ) => {
    if (loadingWeather) return;

    setloadingWeather(true);

    if (hourlyWeather.length === 0 && !all) {
      await getCurrent(location, tempUnit);
      return;
    }

    const { current, hourly, daily } = await getAllWeather(
      location.longitude,
      location.latitude
    );

    formatCurrent(current, tempUnit);

    formatHourly(hourly, tempUnit);

    formatDaily(daily, tempUnit);

    setloadingWeather(false);
  };

  const formatCurrent = (
    current: CurrentWeatherType,
    tempUnit: tempUnitType
  ) => {
    current.dtMill = Number(current.dt) * 1000;
    current.temp = formatTemp({
      celsius: current.temp || "",
      tempUnit,
    });
    current.windSpeed = formatWind(current.windSpeed || "");

    setCurrentWeather(current);
  };

  const formatHourly = (
    hourly: HourlyWeatherType[],
    tempUnit: tempUnitType
  ) => {
    hourly.forEach((element) => {
      element.temp = formatTemp({
        celsius: element.temp || "",
        tempUnit,
      });
      element.time = formatTime(element.dt || "");
    });

    setHourlyWeather(hourly);
  };

  const formatDaily = (daily: DailyWeatherType[], tempUnit: tempUnitType) => {
    daily.forEach((element) => {
      element.maxValue = formatTemp({
        celsius: element.maxValue || "",
        tempUnit,
      });
      element.minValue = formatTemp({
        celsius: element.minValue || "",
        tempUnit,
      });
      element.dtMill = Number(element.dt) * 1000;
    });

    setDailyWeather(daily);
  };

  return (
    <WeatherContext.Provider
      value={{
        getCurrent,
        hourlyWeather,
        dailyWeather,
        getAll,
        currentWeather,
        loadingWeather,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
