import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { Logout } from "./logout";
import { Setup } from "./logout/setup";
import { useAuth } from "../hooks/useAuth";
import { DrawerNavigator } from "./logged/DrawerNavigator";

export function Routes() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {!user?.id ? (
          <Logout />
        ) : !user.farmName ? (
          <Setup />
        ) : (
          <DrawerNavigator />
        )}
      </NavigationContainer>
    </View>
  );
}
