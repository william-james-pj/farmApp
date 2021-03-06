import React, { useState, useEffect } from "react";

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { ButtonSmall } from "../../components/ButtonSmall";
import { Header } from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import { BorderlessButton } from "react-native-gesture-handler";
import { Loading } from "../../components/Loading";
import { Dropdown } from "../../components/Dropdown";
import { useAuth } from "../../hooks/useAuth";
import { useSetting } from "../../hooks/useSetting";
import { useTranslation } from "react-i18next";
import { getCity } from "../../utils/getCity";
import { getState } from "../../utils/getState";

import { DropdownDataType, RootStackParamListLogged } from "../../@types/types";

import * as S from "./styles";

type ProfileProps = DrawerScreenProps<RootStackParamListLogged, "Profile">;

export function Profile({ navigation }: ProfileProps) {
  const { t } = useTranslation();
  const { objSetting } = useSetting();
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [farmName, setFarmName] = useState(user?.farmName || "");
  const [country, setCountry] = useState(user?.location?.country || "");
  const [state, setState] = useState(user?.location?.state || "");
  const [city, setCity] = useState(user?.location?.city || "");
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

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

  const handleCancel = () => {
    setName(user?.name || "");
    setFarmName(user?.farmName || "");
    setCountry(user?.location?.country || "");
    setState(user?.location?.state || "");
    setCity(user?.location?.city || "");
  };

  const handleClick = async () => {
    try {
      if (!farmName.trim().length || !name.trim().length) return;

      if (city === "" || state === "") return;

      setLoadingProfile(true);

      await updateProfile({
        name,
        farmName,
        location: {
          country,
          state,
          city,
        },
      });

      setLoadingProfile(false);
      setButtonDisabled(true);
    } catch (error) {
      setLoadingProfile(false);
      console.log(error);
    }
  };

  const disabled = () => {
    if (
      name === user?.name &&
      farmName === user?.farmName &&
      country === user?.location?.country &&
      state === user?.location?.state &&
      city === user?.location?.city
    )
      return true;
    else return false;
  };

  useEffect(() => {
    selectedCountry();
    selectedState();
  }, []);

  useEffect(() => {
    setButtonDisabled(disabled());
  }, [name, farmName, country, state, city]);

  if (loadingProfile) {
    return <Loading />;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header
        openDrawer={navigation.openDrawer}
        title={t("message:headerProfile")}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <S.Wrapper>
          <S.Row>
            <S.ViewAvatar>
              <S.FontAwesome name={"user-alt"} size={45} />
            </S.ViewAvatar>
            <S.TextName>{user?.name}</S.TextName>
          </S.Row>
          <S.TextPrimary>{t("message:account")}</S.TextPrimary>
          <S.Content>
            <TextInput
              placeholder={t("generic:name")}
              onChangeText={setName}
              value={name}
              widhtBox="100%"
            />
            <TextInput
              placeholder={t("generic:farmName")}
              onChangeText={setFarmName}
              value={farmName}
              widhtBox="100%"
            />
            <S.TextSecond>{t("generic:location")}</S.TextSecond>
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
              itemsData={cityData}
              placeholder={t("generic:city")}
              value={city}
              setValue={setCity}
              listMode={"MODAL"}
              searchable={true}
            />
          </S.Content>
          <S.Footer>
            <S.Button>
              <BorderlessButton onPress={handleCancel}>
                <S.TextCancel>{t("generic:cancel")}</S.TextCancel>
              </BorderlessButton>
            </S.Button>
            <ButtonSmall
              text={t("generic:save")}
              onPress={() => handleClick()}
              disabled={buttonDisabled}
            />
          </S.Footer>
        </S.Wrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
