import React from "react";

import { Path } from "react-native-svg";
import PlusSVG from "../../../assets/svg/Plus.svg";
import { ModalAdd } from "../../../screens/Sensor/ModalAdd";
import { useOpenModalAdd } from "../../../hooks/useOpenModalAdd";

import * as S from "./styles";

interface FloatingButtonProps {
  bgColor: string;
  navigate: () => void;
}

export function FloatingButton({ bgColor, navigate }: FloatingButtonProps) {
  const { openModal } = useOpenModalAdd();

  const changeClick = () => {
    navigate();
    openModal(true);
  };

  return (
    <S.View>
      <SvgBackground color={bgColor} />
      <S.TouchableOpacity onPress={changeClick}>
        <S.ActionButtonView>
          <PlusSVG />
        </S.ActionButtonView>
      </S.TouchableOpacity>
    </S.View>
  );
}

function SvgBackground({ color = "" }) {
  return (
    <S.SvgStyle width={75} height={61} viewBox="0 0 75 61">
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </S.SvgStyle>
  );
}
