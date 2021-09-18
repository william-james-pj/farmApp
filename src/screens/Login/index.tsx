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

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function Login() {
  const usenavigation = useNavigation<ScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <S.Wrapper>
            <S.Title>LogIn Now</S.Title>
            <S.SubTitle>Please login to continue using our app</S.SubTitle>
            <S.Form>
              <TextInput
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                validator={emailValidator}
                errorText={"Please enter a valid email address"}
              />
              <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                validator={passwordValidator}
                errorText={"Password must be at least 6 characters"}
              />
              <S.TextFogot>Forgot Password?</S.TextFogot>
            </S.Form>
            <ButtonLarge onPress={() => {}} text={"LogIn"} />
            <S.Row>
              <S.Acoount>Don’t have an account ?</S.Acoount>
              <S.Button>
                <BorderlessButton
                  onPress={() => {
                    usenavigation.navigate("SignUp");
                  }}
                >
                  <S.ButtonText>Sign Up</S.ButtonText>
                </BorderlessButton>
              </S.Button>
            </S.Row>
            <S.SubTitle>Or connect with</S.SubTitle>
            <ButtonGoogle onPress={() => {}} />
          </S.Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
