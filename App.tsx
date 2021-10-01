import React from "react";

import { ColorModeContext } from "./src/contexts/ColorModeContext";
import { OpenModalAddProvider } from "./src/contexts/OpenModalAddContext";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { SensorContextProvider } from "./src/contexts/SensorContext";
import { WeatherContextProvider } from "./src/contexts/WeatherContext";

import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

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
      <AuthContextProvider>
        <SensorContextProvider>
          <WeatherContextProvider>
            <OpenModalAddProvider>
              <Routes />
            </OpenModalAddProvider>
          </WeatherContextProvider>
        </SensorContextProvider>
      </AuthContextProvider>
    </ColorModeContext>
  );
}
