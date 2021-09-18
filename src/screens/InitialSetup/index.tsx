import React, { useState } from "react";

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButtonProps } from "../../@types/radioButton";
import { ButtonSmall } from "../../components/ButtonSmall";
import { RadioGroup } from "../../components/RadioGroup";
import { TextInput } from "../../components/TextInput";

import * as S from "./styles";

const radioButtonsData = [
  {
    id: "1",
    label: "Celsius (C)",
    value: "celsius",
    selected: true,
  },
  {
    id: "2",
    label: "Fahrenheit (F)",
    value: "fahrenheit",
  },
];

export function InitialSetup() {
  const [farmName, setFarmName] = useState("");
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

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
