import { useContext } from "react";
import { OpenModalAddContext } from "../contexts/OpenModalAddContext";

export function useOpenModalAdd() {
  const value = useContext(OpenModalAddContext);

  return value;
}
