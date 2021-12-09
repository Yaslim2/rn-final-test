import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAuthStackParamList } from "@routes/Auth/types";
import { Container } from "./styles";
import { TGLArea, Form, BackButton } from "@components/index";
import { useDispatch } from "react-redux";
import { asyncCreateUser } from "@store/slices/authSlice";
import handleErrors from "@shared/helpers/handleErrors";

const SignUp = (
  props: NativeStackScreenProps<RootAuthStackParamList, "SignUp">
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      setIsLoading(true);
      await dispatch(
        asyncCreateUser(fields.email!, fields.password!, fields.name!)
      );
    } catch (e: any) {
      setIsLoading(false);
      handleErrors("Credentials error", e.message, true);
    }
  };

  return (
    <Container>
      <TGLArea>Registration</TGLArea>
      <Form loading={isLoading} isSignUp onSubmit={handleSubmit} />
      <BackButton onPress={handleGoBack}>Back</BackButton>
    </Container>
  );
};

export default SignUp;
