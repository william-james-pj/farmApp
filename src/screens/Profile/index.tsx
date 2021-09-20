import React, { useState } from "react";

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamListLogged } from "../../@types/types";

import { ButtonSmall } from "../../components/ButtonSmall";
import { Header } from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import { BorderlessButton } from "react-native-gesture-handler";
import { radioButtonsData } from "../../data/radioButtonData";
import { RadioButtonProps } from "../../@types/radioButton";
import { RadioGroup } from "../../components/RadioGroup";

import * as S from "./styles";

type ProfileProps = DrawerScreenProps<RootStackParamListLogged, "Profile">;

export function Profile({ navigation }: ProfileProps) {
  const [name, setName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header openDrawer={navigation.openDrawer} title="Edit Profile" />
        <S.Wrapper>
          <S.Row>
            <S.ViewAvatar>
              <S.FontAwesome name={"user-alt"} size={45} />
            </S.ViewAvatar>
            <S.TextName>Name</S.TextName>
          </S.Row>
          <S.TextPrimary>Account Settings</S.TextPrimary>
          <S.Content>
            <TextInput
              placeholder="Name"
              onChangeText={setName}
              value={name}
              widhtBox="100%"
            />
            <TextInput
              placeholder="Farm name"
              onChangeText={setFarmName}
              value={farmName}
              widhtBox="100%"
            />
            <S.TextSecond>Temperature unit</S.TextSecond>
            <RadioGroup
              radioButtons={radioButtonsData}
              onPress={onPressRadioButton}
            />
            <S.TextSecond>Location</S.TextSecond>
          </S.Content>
          <S.Footer>
            <S.Button>
              <BorderlessButton onPress={() => {}}>
                <S.TextCancel>Cancel</S.TextCancel>
              </BorderlessButton>
            </S.Button>
            <ButtonSmall text={"Save"} onPress={() => {}} />
          </S.Footer>
        </S.Wrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
