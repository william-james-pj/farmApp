import React, { useState, useEffect } from "react";
import { Alert, Dimensions } from "react-native";

import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";

import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamListLogged } from "../../@types/types";
type QRCodeReadProps = DrawerScreenProps<
  RootStackParamListLogged,
  "QRCodeRead"
>;

import { useSensor } from "../../hooks/useSensor";
import { useOpenModalAdd } from "../../hooks/useOpenModalAdd";
import { useTranslation } from "react-i18next";

const finderWidth: number = 280;
const finderHeight: number = 230;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height - 200;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

import * as S from "./styles";

export function QRCodeRead({ navigation }: QRCodeReadProps) {
  const { validateSensor } = useSensor();
  const { t } = useTranslation();
  const { openModal } = useOpenModalAdd();

  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = async (scanningResult: BarCodeScannerResult) => {
    const { data, bounds: { origin } = {} } = scanningResult;
    const { x, y }: any = origin;
    if (
      x <= viewMinX &&
      y <= viewMinY &&
      x >= viewMinX + finderWidth / 2 &&
      y >= viewMinY + finderHeight / 2
    ) {
      return;
    }

    const { status, msg } = await validateSensor(data);
    if (!status) {
      const message =
        msg === 1 ? t("message:codeInvalid") : t("message:notFound");

      setScanned(true);
      return Alert.alert(message, undefined, [
        {
          text: "OK",
          onPress: () => {
            setScanned(false);
          },
          style: "default",
        },
      ]);
    }

    setScanned(true);
    navigation.navigate("Sensor");
    openModal(true);
    setScanned(false);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <S.Wrapper>
      <S.Context>
        <S.BoxCode>
          <BarCodeScanner
            barCodeTypes={["qr"]}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ width: "100%", height: "100%" }}
          >
            <S.Mask showAnimatedLine />
          </BarCodeScanner>
        </S.BoxCode>
      </S.Context>
      <S.Footer>
        <S.Title>{t("message:placeQr")}</S.Title>
        <S.SubTitle>{t("message:scanning")}</S.SubTitle>
      </S.Footer>
    </S.Wrapper>
  );
}
