import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import { RectButton } from "react-native-gesture-handler";

import { IconColorMode } from "../../../components/IconColorMode";
import LogOutSvg from "../../../assets/svg/LogOut.svg";

import * as S from "./styles";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const theme = useTheme();
  const routerName = props.state.routeNames;

  const styles = StyleSheet.create({
    drawerItem: {
      width: "60%",
      borderRadius: 20,
      overflow: "hidden",
      marginVertical: 10,
    },
  });

  return (
    <S.ViewContainer style={{ flex: 1 }}>
      <S.ViewHeader>
        <S.Row>
          <S.ViewAvatar>
            <S.FontAwesome name={"user-alt"} size={45} />
          </S.ViewAvatar>
          <S.TextName>Name</S.TextName>
        </S.Row>
        <S.Row>
          <IconColorMode />
        </S.Row>
      </S.ViewHeader>
      <S.ViewContent>
        <DrawerItem
          style={styles.drawerItem}
          activeBackgroundColor={theme.colors.primaryOpacity}
          inactiveBackgroundColor={theme.colors.background}
          focused={routerName[props.state.index] === "Home"}
          onPress={() => props.navigation.navigate("Home")}
          icon={({ focused }) => (
            <S.IconLabel name={"home"} size={20} focused={focused} />
          )}
          label={({ focused }) => (
            <S.TextLabel focused={focused}>Home</S.TextLabel>
          )}
        />
        <DrawerItem
          style={styles.drawerItem}
          activeBackgroundColor={theme.colors.primaryOpacity}
          inactiveBackgroundColor={theme.colors.background}
          focused={routerName[props.state.index] === "Profile"}
          onPress={() => props.navigation.navigate("Profile")}
          icon={({ focused }) => (
            <S.IconLabel name={"user-alt"} size={20} focused={focused} />
          )}
          label={({ focused }) => (
            <S.TextLabel focused={focused}>Profile</S.TextLabel>
          )}
        />
      </S.ViewContent>
      <S.ViewFooter>
        <S.ViewButtonFooter>
          <RectButton
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <LogOutSvg fill={theme.colors.disabled} />
            <S.TextLogOut>{`Log Out`}</S.TextLogOut>
          </RectButton>
        </S.ViewButtonFooter>
      </S.ViewFooter>
    </S.ViewContainer>
  );
}
