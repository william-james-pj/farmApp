import React from "react";
import { StyleSheet } from "react-native";
import { SensorItemType } from "../../../@types/types";

import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

export function SensorItem({ item }: { item: SensorItemType }) {
  const styles = StyleSheet.create({
    box: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
    button: {
      flex: 1,
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
  });

  return (
    <S.Wrapper>
      <S.ShadowView style={styles.box}>
        <RectButton onPress={() => {}} style={styles.button}>
          <S.Square color={item.color} />
          <S.TextContainer>
            <S.SensorName>{item.name}</S.SensorName>
          </S.TextContainer>
        </RectButton>
      </S.ShadowView>
    </S.Wrapper>
  );
}
