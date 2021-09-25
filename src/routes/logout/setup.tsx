import React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { InitialSetup } from "../../screens/InitialSetup";

import { RootStackParamListSetup } from "../../@types/types";

const Stack = createStackNavigator<RootStackParamListSetup>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function Setup() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="InitialSetup" component={InitialSetup} />
    </Stack.Navigator>
  );
}
