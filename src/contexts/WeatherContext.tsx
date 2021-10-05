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
} from "../@types/types";

type WeatherType = {
  currentWeather: CurrentWeatherType;
  hourlyWeather: HourlyWeatherType[];
  dailyWeather: DailyWeatherType[];
  getCurrent: (location: LocationType, tempUnit: string) => void;
  getAll: (location: LocationType, tempUnit: string) => void;
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

  const getCurrent = async (location: LocationType, tempUnit: string) => {
    setloadingWeather(true);

    const current = await getCurrentWeather(
      location.longitude,
      location.latitude
    );

    formatCurrent(current, tempUnit);

    setloadingWeather(false);
  };

  const getAll = async (location: LocationType, tempUnit: string) => {
    setloadingWeather(true);

    const { current, hourly, daily } = await getAllWeather(
      location.longitude,
      location.latitude
    );

    formatCurrent(current, tempUnit);

    formatHourly(hourly, tempUnit);

    formatDaily(daily, tempUnit);

    setloadingWeather(false);
  };

  const formatCurrent = (current: CurrentWeatherType, tempUnit: string) => {
    current.dtMill = Number(current.dt) * 1000;
    current.temp = formatTemp({
      value: current.temp || "",
      tempUnit: tempUnit === "celsius" ? "celsius" : "fahrenheit",
    });
    current.windSpeed = formatWind(current.windSpeed || "");

    setCurrentWeather(current);
  };

  const formatHourly = (hourly: HourlyWeatherType[], tempUnit: string) => {
    hourly.forEach((element) => {
      element.temp = formatTemp({
        value: element.temp || "",
        tempUnit: tempUnit === "celsius" ? "celsius" : "fahrenheit",
      });
      element.time = formatTime(element.dt || "");
    });

    setHourlyWeather(hourly);
  };

  const formatDaily = (daily: DailyWeatherType[], tempUnit: string) => {
    daily.forEach((element) => {
      element.maxValue = formatTemp({
        value: element.maxValue || "",
        tempUnit: tempUnit === "celsius" ? "celsius" : "fahrenheit",
      });
      element.minValue = formatTemp({
        value: element.minValue || "",
        tempUnit: tempUnit === "celsius" ? "celsius" : "fahrenheit",
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
