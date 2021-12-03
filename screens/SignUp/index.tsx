import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAuthStackParamList } from "../../routes/Auth";

import { Container } from "./styles";
import TGLArea from "../../components/TGLArea";
import Form from "../../components/Form";
import BackButton from "../../components/BackButton";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";

import { asyncCreateUser } from "../../store/slices/authSlice";
import handleErrors from "../../shared/helpers/handleErrors";

const SignUp = (
  props: NativeStackScreenProps<RootAuthStackParamList, "SignUp">
) => {
  const dispatch = useDispatch();
  const handleGoBack = () => {
    props.navigation.goBack();
  };
  const handleSubmit = async (fields: {
    email?: string;
    password?: string;
    name?: string;
  }) => {
    try {
      await dispatch(
        asyncCreateUser(fields.email!, fields.password!, fields.name!)
      );
      props.navigation.navigate("Default");
    } catch (e: any) {
      handleErrors("Credentials error", e.message, true);
    }
  };

  return (
    <Container>
      <TGLArea>Registration</TGLArea>
      <Form isSignUp onSubmit={handleSubmit} />
      <BackButton onPress={handleGoBack}>Back</BackButton>
    </Container>
  );
};

export default SignUp;
