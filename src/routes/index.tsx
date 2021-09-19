import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

// import { Logout } from "./logout";
import { DrawerNavigator } from "./logged/DrawerNavigator";

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  );
}
