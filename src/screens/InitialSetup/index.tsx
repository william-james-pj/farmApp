import React, { useState, useEffect } from "react";

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButtonProps } from "../../@types/radioButton";
import { DropdownDataType } from "../../@types/types";
import { ButtonSmall } from "../../components/ButtonSmall";
import { Dropdown } from "../../components/Dropdown";
import { Loading } from "../../components/Loading";
import { RadioGroup } from "../../components/RadioGroup";
import { TextInput } from "../../components/TextInput";
import { radioButtonsData } from "../../data/radioButtonData";
import { useAuth } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { getCity } from "../../utils/getCity";
import { getState } from "../../utils/getState";

import * as S from "./styles";

export function InitialSetup() {
  const { t } = useTranslation();
  const { setInitialSetup } = useAuth();
  const [farmName, setFarmName] = useState("");
  const [country, setCountry] = useState("BR");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const [stateData, setStateData] = useState<DropdownDataType>([]);
  const [cityData, setCityData] = useState<DropdownDataType>([]);

  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  const selectedCountry = async () => {
    const data = await getState(country);
    setStateData(data);
  };

  const selectedState = async () => {
    if (state === "") return;
    const data = await getCity(country, state);
    setCityData(data);
  };

  const handleClick = async () => {
    try {
      if (!farmName.trim().length) return;

      if (city === "" || state === "") return;

      setLoading(true);
      let radio = "";

      radioButtons.forEach((element) => {
        if (element.selected) radio = element.value || "";
      });

      await setInitialSetup({
        farmName,
        config: {
          tempUnit: radio,
        },
        location: {
          country,
          state,
          city,
        },
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    selectedCountry();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <S.Wrapper>
            <S.Title>{t("message:welcome")}</S.Title>
            <S.SubTitle>{t("message:before")}</S.SubTitle>
            <S.Form>
              <TextInput
                placeholder="Farm Name"
                onChangeText={setFarmName}
                value={farmName}
              />
              <S.Row>
                <S.Label>{t("generic:tempUnit")}</S.Label>
                <RadioGroup
                  radioButtons={radioButtonsData}
                  onPress={onPressRadioButton}
                />
              </S.Row>
              <S.Row>
                <S.Label>{t("generic:location")}</S.Label>
                <Dropdown
                  itemsData={[{ id: 112, label: "Brasil", value: "BR" }]}
                  placeholder={t("generic:country")}
                  value={country}
                  setValue={setCountry}
                  disabled={true}
                />
                <Dropdown
                  itemsData={stateData}
                  placeholder={t("generic:state")}
                  value={state}
                  setValue={setState}
                  onChangeValue={selectedState}
                />
                <Dropdown
                  disabled={state === ""}
                  itemsData={cityData}
                  placeholder={t("generic:city")}
                  value={city}
                  setValue={setCity}
                  listMode={"MODAL"}
                  searchable={true}
                />
              </S.Row>
            </S.Form>
            <S.Footer>
              <ButtonSmall text={t("generic:finish")} onPress={handleClick} />
            </S.Footer>
          </S.Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
