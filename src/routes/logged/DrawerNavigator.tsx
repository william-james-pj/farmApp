import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import { CustomDrawerContent } from "./CustomDrawerContent";
import { BottomTabNavigator } from "./BottomTabNavigator";

import { Guide } from "../../screens/Guide";
import { Profile } from "../../screens/Profile";
import { Setting } from "../../screens/Setting";

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Guide" component={Guide} />
    </Drawer.Navigator>
  );
}
