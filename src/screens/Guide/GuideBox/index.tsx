import React from "react";
import { useTranslation } from "react-i18next";

import { RectButton } from "react-native-gesture-handler";
import { GuideBoxType } from "../../../@types/types";

import * as S from "./styles";

export function GuideBox({ item }: { item: GuideBoxType }) {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <RectButton style={{ flex: 1, zIndex: 99 }} onPress={() => {}}>
        <S.Container>
          <S.Title>{item.title}</S.Title>
          <S.Context>
            <S.TextContext>{item.description}</S.TextContext>
          </S.Context>
          <S.Footer>
            <S.TextFooter>{t("message:guideStart")}</S.TextFooter>
            <S.ArrowRight />
          </S.Footer>
        </S.Container>
      </RectButton>
      <S.Background />
    </S.Wrapper>
  );
}
