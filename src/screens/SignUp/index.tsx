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
import { Loading } from "../../components/Loading";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function SignUp() {
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
            <S.Title>Sign Up Now</S.Title>
            <S.SubTitle>Please fill the details and create account</S.SubTitle>
            <S.Form>
              <TextInput
                placeholder="Name"
                onChangeText={setName}
                value={name}
                validator={nameValidator}
                errorText={"The name contains invalid characters"}
              />
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
            </S.Form>
            <ButtonLarge onPress={handleSingUp} text={"Sign up"} />
            <S.Row>
              <S.Acoount>Already have an account ?</S.Acoount>
              <S.Button>
                <BorderlessButton
                  onPress={() => {
                    usenavigation.navigate("Login");
                  }}
                >
                  <S.ButtonText>Log in</S.ButtonText>
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
