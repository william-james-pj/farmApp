import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonGoogle } from "../../components/ButtonGoogle";
import { ButtonLarge } from "../../components/ButtonLarge";
import { TextInput } from "../../components/TextInput";
import { Loading } from "../../components/Loading";

import { useAuth } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { emailValidator } from "../../utils/emailValidator";
import { passwordValidator } from "../../utils/passwordValidator";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function Login() {
  const { t } = useTranslation();
  const { loginWithEmailAndPassword } = useAuth();
  const usenavigation = useNavigation<ScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (!email.trim().length || !password.trim().length) return;

      setLoading(true);
      await loginWithEmailAndPassword(email, password);
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
            <S.Title>{t("message:loginNow")}</S.Title>
            <S.SubTitle>{t("message:loginToContinue")}</S.SubTitle>
            <S.Form>
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
              <S.TextFogot>{t("message:forgotPassWord")}</S.TextFogot>
            </S.Form>
            <ButtonLarge onPress={handleLogin} text={t("message:login")} />
            <S.Row>
              <S.Acoount>{t("message:dontHave")}</S.Acoount>
              <S.Button>
                <BorderlessButton
                  onPress={() => {
                    usenavigation.navigate("SignUp");
                  }}
                >
                  <S.ButtonText>{t("message:signUp")}</S.ButtonText>
                </BorderlessButton>
              </S.Button>
            </S.Row>
          </S.Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
