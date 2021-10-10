import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { RectButton, Swipeable } from "react-native-gesture-handler";
import { ModalInfo } from "../ModalInfo";
import { useAuth } from "../../../hooks/useAuth";
import { useSensor } from "../../../hooks/useSensor";
import { SensorItemType } from "../../../@types/types";

import * as S from "./styles";

export function SensorItem({ item }: { item: SensorItemType }) {
  const { deleteSensor } = useSensor();
  const { user } = useAuth();
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
      height: 45,
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
  });

  const handleDelete = () => {
    deleteSensor(item.id, user?.id || "");
  };

  const rightSwipe = () => {
    return (
      <S.DeleteBox>
        <S.Trash />
      </S.DeleteBox>
    );
  };

  return (
    <>
      <S.Wrapper>
        <S.ShadowView style={styles.box}>
          <Swipeable
            renderRightActions={rightSwipe}
            onSwipeableRightOpen={handleDelete}
          >
            <S.ItemContainer>
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
            </S.ItemContainer>
          </Swipeable>
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
