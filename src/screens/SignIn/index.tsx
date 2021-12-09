import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAuthStackParamList } from "@routes/Auth/types";
import { Form, TGLArea, BackButton } from "@components/index";
import { useDispatch } from "react-redux";
import { Container } from "./styles";
import { asyncLoginUser } from "@store/slices/authSlice";
import { handleErrors } from "@shared/helpers";

const SignIn = (
  props: NativeStackScreenProps<RootAuthStackParamList, "SignIn">
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = async (fields: {
    email?: string;
    password?: string;
  }) => {
    try {
      setIsLoading(true);
      await dispatch(asyncLoginUser(fields.email!, fields.password!));
    } catch (e: any) {
      setIsLoading(false);
      handleErrors(
        "Credentials error",
        "Invalid password or email, please check the fields and try again.",
        true
      );
    }
  };

  const handleResetPassword = () => {
    props.navigation.navigate("ResetPassword");
  };

  const handleGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <Container>
      <TGLArea>Authentication</TGLArea>
      <Form
        loading={isLoading}
        onResetPassword={handleResetPassword}
        onSubmit={handleSubmit}
      />
      <BackButton onPress={handleGoBack}>Back</BackButton>
    </Container>
  );
};

export default SignIn;
