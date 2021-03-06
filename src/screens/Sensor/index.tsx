import React, { useRef } from "react";
import { FlatList } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";
import { SensorItem } from "./SensorItem";
import { ModalAdd } from "./ModalAdd";
import { useSensor } from "../../hooks/useSensor";
import { useTranslation } from "react-i18next";

import { RootStackParamListLogged, SensorItemType } from "../../@types/types";

type SensorProps = DrawerScreenProps<RootStackParamListLogged, "Sensor">;

import * as S from "./styles";

export function Sensor({ navigation }: SensorProps) {
  const { t } = useTranslation();
  const { sensorData } = useSensor();
  const flatList = useRef<FlatList<SensorItemType>>(null);

  const renderRows = ({ item }: { item: SensorItemType }) => {
    return <SensorItem item={item} />;
  };

  const listEmpty = () => {
    return (
      <S.EmptyContainer>
        <S.Barcode />
        <S.EmptyTitle>{t("message:noSensor")}</S.EmptyTitle>
        <S.EmptySubTitle>{t("message:addNow")}</S.EmptySubTitle>
      </S.EmptyContainer>
    );
  };

  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.TitleContainer>
          <S.Title>{t("message:titleSensors")}</S.Title>
        </S.TitleContainer>
        <S.FlatListS
          ref={flatList}
          removeClippedSubviews={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={sensorData}
          renderItem={renderRows}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
          ListEmptyComponent={listEmpty}
        />
      </S.Wrapper>
      <ModalAdd />
    </>
  );
}
