import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { Logout } from "./logout";

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Logout />
      </NavigationContainer>
    </View>
  );
}
