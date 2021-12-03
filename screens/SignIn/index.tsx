import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAuthStackParamList } from "../../routes/Auth";
import Form from "../../components/Form";
import TGLArea from "../../components/TGLArea";
import { useDispatch } from "react-redux";
import { Container } from "./styles";
import BackButton from "../../components/BackButton";
import { asyncLoginUser } from "../../store/slices/authSlice";
import { handleErrors } from "../../shared/helpers";

const SignIn = (
  props: NativeStackScreenProps<RootAuthStackParamList, "SignIn">
) => {
  const dispatch = useDispatch();

  const handleSubmit = async (fields: {
    email?: string;
    password?: string;
    name?: string;
  }) => {
    try {
      await dispatch(asyncLoginUser(fields.email!, fields.password!));
    } catch (e: any) {
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
      <Form onResetPassword={handleResetPassword} onSubmit={handleSubmit} />
      <BackButton onPress={handleGoBack}>Back</BackButton>
    </Container>
  );
};

export default SignIn;