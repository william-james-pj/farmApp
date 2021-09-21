import React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Home } from "../../screens/Home";
import { Weather } from "../../screens/Weather";

import { RootStackParamListLogged } from "../../@types/types";

const Stack = createStackNavigator<RootStackParamListLogged>();

const screenOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function StackNavigator() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Weather"
        component={Weather}
      />
    </Stack.Navigator>
  );
}
