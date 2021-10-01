import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export function useWeather() {
  const value = useContext(WeatherContext);

  return value;
}
