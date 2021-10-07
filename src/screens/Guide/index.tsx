import React from "react";

import { DrawerScreenProps } from "@react-navigation/drawer";
import { GuideBoxType, RootStackParamListLogged } from "../../@types/types";
type GuideProps = DrawerScreenProps<RootStackParamListLogged, "Guide">;

import { Header } from "../../components/Header";
import { GuideBox } from "./GuideBox";
import { guideData } from "../../data/guideData";
import { useTranslation } from "react-i18next";

import * as S from "./styles";

export function Guide({ navigation }: GuideProps) {
  const { t } = useTranslation();

  const renderRows = ({ item }: { item: GuideBoxType }) => {
    return <GuideBox item={item} />;
  };

  const listHeader = () => {
    return (
      <S.TextContainer>
        <S.Title>{t("message:guideTitle")}</S.Title>
        <S.SubTitle>{t("message:guideSubTitle")}</S.SubTitle>
      </S.TextContainer>
    );
  };

  return (
    <>
      <Header
        openDrawer={navigation.openDrawer}
        title={t("message:guideHeader")}
      />
      <S.Wrapper>
        <S.FlatListS
          removeClippedSubviews={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={guideData(t("message:guideHeader") === "Guides")}
          renderItem={renderRows}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
          ListHeaderComponent={listHeader}
        />
      </S.Wrapper>
    </>
  );
}
