import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { ModalInfo } from "../ModalInfo";
import { SensorItemType } from "../../../@types/types";

import * as S from "./styles";

export function SensorItem({ item }: { item: SensorItemType }) {
  const [isModalVisible, setModalVisible] = useState(false);

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
    <>
      <S.Wrapper>
        <S.ShadowView style={styles.box}>
          <RectButton
            onPress={() => {
              setModalVisible(true);
            }}
            style={styles.button}
          >
            <S.Square color={item.color} />
            <S.TextContainer>
              <S.SensorName>{item.name}</S.SensorName>
            </S.TextContainer>
          </RectButton>
        </S.ShadowView>
      </S.Wrapper>
      <ModalInfo
        isModalVisible={isModalVisible}
        setModalVisible={() => setModalVisible(false)}
        sensor={item}
      />
    </>
  );
}
