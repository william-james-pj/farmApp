import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonGoogle } from "../../components/ButtonGoogle";
import { ButtonLarge } from "../../components/ButtonLarge";
import { TextInput } from "../../components/TextInput";

import { emailValidator } from "../../utils/emailValidator";
import { passwordValidator } from "../../utils/passwordValidator";
import { nameValidator } from "../../utils/nameValidator";
import { useAuth } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { Loading } from "../../components/Loading";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function SignUp() {
  const { t } = useTranslation();
  const { signInWithEmailAndPassword } = useAuth();
  const usenavigation = useNavigation<ScreenNavigationProp>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSingUp = async () => {
    try {
      if (
        !name.trim().length ||
        !email.trim().length ||
        !password.trim().length
      )
        return;

      setLoading(true);
      await signInWithEmailAndPassword({ email, password, name });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
            <S.Title>{t("message:signUpNow")}</S.Title>
            <S.SubTitle>{t("message:fillDetails")}</S.SubTitle>
            <S.Form>
              <TextInput
                placeholder={t("generic:name")}
                onChangeText={setName}
                value={name}
                validator={nameValidator}
                errorText={t("generic:validName")}
              />
              <TextInput
                placeholder={t("generic:email")}
                onChangeText={setEmail}
                value={email}
                validator={emailValidator}
                errorText={t("generic:validEmail")}
              />
              <TextInput
                placeholder={t("generic:password")}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                validator={passwordValidator}
                errorText={t("generic:validPassword")}
              />
            </S.Form>
            <ButtonLarge onPress={handleSingUp} text={t("message:signUp")} />
            <S.Row>
              <S.Acoount>{t("message:alreadyHave")}</S.Acoount>
              <S.Button>
                <BorderlessButton
                  onPress={() => {
                    usenavigation.navigate("Login");
                  }}
                >
                  <S.ButtonText>{t("message:login")}</S.ButtonText>
                </BorderlessButton>
              </S.Button>
            </S.Row>
          </S.Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
