import React, { useState, useEffect } from "react";

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { ButtonSmall } from "../../components/ButtonSmall";
import { Header } from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import { BorderlessButton } from "react-native-gesture-handler";
import { Loading } from "../../components/Loading";
import { radioButtonsData } from "../../data/radioButtonData";
import { RadioGroup } from "../../components/RadioGroup";
import { Dropdown } from "../../components/Dropdown";
import { useAuth } from "../../hooks/useAuth";
import { getCity } from "../../utils/getCity";
import { getState } from "../../utils/getState";

import { DropdownDataType } from "../../@types/types";
import { RadioButtonProps } from "../../@types/radioButton";
import { RootStackParamListLogged } from "../../@types/types";

import * as S from "./styles";

type ProfileProps = DrawerScreenProps<RootStackParamListLogged, "Profile">;

export function Profile({ navigation }: ProfileProps) {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [farmName, setFarmName] = useState(user?.farmName || "");
  const [country, setCountry] = useState(user?.location?.country || "");
  const [state, setState] = useState(user?.location?.state || "");
  const [city, setCity] = useState(user?.location?.city || "");
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([]);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  const [stateData, setStateData] = useState<DropdownDataType>([]);
  const [cityData, setCityData] = useState<DropdownDataType>([]);

  const selectedCountry = async () => {
    const data = await getState(country);
    setStateData(data);
  };

  const selectedState = async () => {
    if (state === "") return;
    const data = await getCity(country, state);
    setCityData(data);
  };

  const radioBunttonsCorrecting = (): RadioButtonProps[] => {
    return radioButtonsData.map((element) => {
      if (element.value === user?.config?.tempUnit) element.selected = true;
      else element.selected = false;

      return element;
    });
  };

  const handleCancel = () => {
    setName(user?.name || "");
    setFarmName(user?.farmName || "");
    setCountry(user?.location?.country || "");
    setState(user?.location?.state || "");
    setCity(user?.location?.city || "");
    setRadioButtons(radioBunttonsCorrecting());
  };

  const handleClick = async () => {
    try {
      if (!farmName.trim().length || !name.trim().length) return;

      if (city === "" || state === "") return;

      setLoadingProfile(true);

      let radio = "";

      radioButtons.forEach((element) => {
        if (element.selected) radio = element.value || "";
      });

      await updateProfile({
        name,
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
      setLoadingProfile(false);
    } catch (error) {
      setLoadingProfile(false);
      console.log(error);
    }
  };

  const disabled = () => {
    let radio = "";
    radioButtons.forEach((element) => {
      if (element.selected) radio = element.value || "";
    });

    if (
      name === user?.name &&
      farmName === user?.farmName &&
      country === user?.location?.country &&
      state === user?.location?.state &&
      city === user?.location?.city &&
      radio === user?.config?.tempUnit
    )
      return true;
    else return false;
  };

  useEffect(() => {
    selectedCountry();
    selectedState();

    setRadioButtons(radioBunttonsCorrecting());
  }, []);

  useEffect(() => {
    setButtonDisabled(disabled());
  }, [name, farmName, country, state, city, radioButtons]);

  if (loadingProfile) {
    return <Loading />;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header openDrawer={navigation.openDrawer} title="Edit Profile" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <S.Wrapper>
          <S.Row>
            <S.ViewAvatar>
              <S.FontAwesome name={"user-alt"} size={45} />
            </S.ViewAvatar>
            <S.TextName>{user?.name}</S.TextName>
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
              itemsData={cityData}
              placeholder={"City"}
              value={city}
              setValue={setCity}
              listMode={"MODAL"}
              searchable={true}
            />
          </S.Content>
          <S.Footer>
            <S.Button>
              <BorderlessButton onPress={handleCancel}>
                <S.TextCancel>Cancel</S.TextCancel>
              </BorderlessButton>
            </S.Button>
            <ButtonSmall
              text={"Save"}
              onPress={() => handleClick()}
              disabled={buttonDisabled}
            />
          </S.Footer>
        </S.Wrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
