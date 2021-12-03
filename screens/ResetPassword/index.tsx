import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import Form from "../../components/Form";
import TGLArea from "../../components/TGLArea";
import { RootAuthStackParamList } from "../../routes/Auth";

import { Container } from "./styles";

const ResetPassword = (
  props: NativeStackScreenProps<RootAuthStackParamList, "ResetPassword">
) => {
  const handleResetPassword = () => {};
  const handleGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <Container>
      <TGLArea>Reset password</TGLArea>
      <Form isResetPassword onSubmit={handleResetPassword} />
      <BackButton onPress={handleGoBack}>Back</BackButton>
    </Container>
  );
};

export default ResetPassword;
