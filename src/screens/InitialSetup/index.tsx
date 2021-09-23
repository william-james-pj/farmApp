import React, { useState, useEffect } from "react";

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButtonProps } from "../../@types/radioButton";
import { DropdownDataType } from "../../@types/types";
import { ButtonSmall } from "../../components/ButtonSmall";
import { Dropdown } from "../../components/Dropdown";
import { RadioGroup } from "../../components/RadioGroup";
import { TextInput } from "../../components/TextInput";
import { radioButtonsData } from "../../data/radioButtonData";
import { getCity } from "../../utils/getCity";
import { getState } from "../../utils/getState";

import * as S from "./styles";

export function InitialSetup() {
  const [farmName, setFarmName] = useState("");
  const [country, setCountry] = useState("BR");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

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

  useEffect(() => {
    selectedCountry();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <S.Wrapper>
            <S.Title>Welcome</S.Title>
            <S.SubTitle>
              Before using the app, make the initial setup
            </S.SubTitle>
            <S.Form>
              <TextInput
                placeholder="Farm Name"
                onChangeText={setFarmName}
                value={farmName}
              />
              <S.Row>
                <S.Label>Temperature unit</S.Label>
                <RadioGroup
                  radioButtons={radioButtonsData}
                  onPress={onPressRadioButton}
                />
              </S.Row>
              <S.Row>
                <S.Label>Location</S.Label>
                <Dropdown
                  itemsData={[{ id: 112, label: "Brasil", value: "BR" }]}
                  placeholder={"Country"}
                  value={country}
                  setValue={setCountry}
                  disabled={true}
                />
                <Dropdown
                  itemsData={stateData}
                  placeholder={"State"}
                  value={state}
                  setValue={setState}
                  onChangeValue={selectedState}
                />
                <Dropdown
                  disabled={state === ""}
                  itemsData={cityData}
                  placeholder={"City"}
                  value={city}
                  setValue={setCity}
                  listMode={"MODAL"}
                  searchable={true}
                />
              </S.Row>
            </S.Form>
            <S.Footer>
              <ButtonSmall text={"Finish"} onPress={() => {}} />
            </S.Footer>
          </S.Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
