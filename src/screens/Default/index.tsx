import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DetailsArea, MainButton, ScrollContainer } from "@components/index";
import { RootAuthStackParamList } from "@routes/Auth/types";
import {
  Container,
  ActionsArea,
  ActionsText,
  MainButtonArea,
  ActionsBoldText,
} from "./styles";

const Default = (
  props: NativeStackScreenProps<RootAuthStackParamList, "Default">
) => {
  const handleSignIn = () => {
    props.navigation.navigate("SignIn");
  };

  const handleSignUp = () => {
    props.navigation.navigate("SignUp");
  };

  return (
    <ScrollContainer>
      <Container>
        <DetailsArea />
        <ActionsArea>
          <ActionsText>Don't have an account?</ActionsText>
          <ActionsBoldText>
            Sign up and make bets for any games!
          </ActionsBoldText>
          <MainButtonArea>
            <MainButton onPress={handleSignUp}>Sign Up</MainButton>
          </MainButtonArea>
        </ActionsArea>
        <ActionsArea>
          <ActionsText>Already have one?</ActionsText>
          <ActionsBoldText>
            Then sign in and start to make your bets!
          </ActionsBoldText>
          <MainButtonArea>
            <MainButton onPress={handleSignIn}>Sign In</MainButton>
          </MainButtonArea>
        </ActionsArea>
      </Container>
    </ScrollContainer>
  );
};

export default Default;
