import { useContext } from "react";
import { SensorContext } from "../contexts/SensorContext";

export function useSensor() {
  const value = useContext(SensorContext);

  return value;
}
