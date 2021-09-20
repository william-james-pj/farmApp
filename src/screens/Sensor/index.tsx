import React, { useRef } from "react";
import { FlatList } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";
import { SensorItem } from "./SensorItem";

import { RootStackParamListLogged, SensorItemType } from "../../@types/types";

type SensorProps = DrawerScreenProps<RootStackParamListLogged, "Sensor">;

import * as S from "./styles";

const data: SensorItemType[] = [
  {
    id: "1",
    name: "Sensor_name_1",
    color: "#B97171",
  },
  {
    id: "2",
    name: "Sensor_name_2",
    color: "#84B971",
  },
  {
    id: "3",
    name: "Sensor_name_3",
    color: "#71B9A8",
  },
  {
    id: "4",
    name: "Sensor_name_4",
    color: "#9571B9",
  },
  {
    id: "5",
    name: "Sensor_name_5",
    color: "#7185B9",
  },
  {
    id: "6",
    name: "Sensor_name_6",
    color: "#B771B9",
  },
  {
    id: "7",
    name: "Sensor_name_7",
    color: "#AFB971",
  },
];

export function Sensor({ navigation }: SensorProps) {
  const flatList = useRef<FlatList<SensorItemType>>(null);

  const renderRows = ({ item }: { item: SensorItemType }) => {
    return <SensorItem item={item} />;
  };

  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.TitleContainer>
          <S.Title>Sensores</S.Title>
        </S.TitleContainer>
        <S.FlatListS
          ref={flatList}
          removeClippedSubviews={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={data}
          renderItem={renderRows}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
        />
      </S.Wrapper>
    </>
  );
}
