import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import BackButton from "../../components/BackButton";
import Form from "../../components/Form";
import TGLArea from "../../components/TGLArea";
import { RootAuthStackParamList } from "../../routes/Auth";
import { handleErrors } from "../../shared/helpers";
import { asyncResetPassword } from "../../shared/helpers/";

import { Container } from "./styles";

type Data = {
  token?: string;
};

const ResetPassword = (
  props: NativeStackScreenProps<RootAuthStackParamList, "ResetPassword">
) => {
  const handleResetPassword = async (fields: { email?: string }) => {
    try {
      const token = await asyncResetPassword(fields.email!);
      props.navigation.navigate("ChangePassword", { token });
    } catch (e) {
      handleErrors("Error", "User not found in our database.", true);
    }
  };
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
