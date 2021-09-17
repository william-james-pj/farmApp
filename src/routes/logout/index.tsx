import React from "react";

import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { Welcome } from "../../screens/Welcome";
import { Login } from "../../screens/Login";
import { SingUp } from "../../screens/SingUp";

import { RootStackParamListLogout } from "../../@types/types";

const Stack = createStackNavigator<RootStackParamListLogout>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: "transparent",
  },
};

export function Logout() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigator>
  );
}
