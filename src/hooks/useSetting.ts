import { useContext } from "react";
import { SettingContext } from "../contexts/SettingContext";

export function useSetting() {
  const value = useContext(SettingContext);

  return value;
}
