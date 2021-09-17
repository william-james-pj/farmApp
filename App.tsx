import React from "react";

import { ColorModeContext } from "./src/contexts/ColorModeContext";

import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ColorModeContext>
      <Routes />
    </ColorModeContext>
  );
}
