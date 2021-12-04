import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import BackButton from "../../components/BackButton";
import Form from "../../components/Form";
import TGLArea from "../../components/TGLArea";
import { RootAuthStackParamList } from "../../routes/Auth";
import { handleErrors } from "../../shared/helpers";
import { asyncChangePassword } from "../../store/slices/authSlice";
import { Container } from "./styles";

// import { Container } from './styles';

const ChangePassword = (
  props: NativeStackScreenProps<RootAuthStackParamList, "ChangePassword">
) => {
  const dispatch = useDispatch();
  const token = props.route.params.token;

  const handleChangePassword = async (fields: { password?: string }) => {
    try {
      await dispatch(asyncChangePassword(token, fields.password!));
      props.navigation.popToTop();
    } catch (e: any) {
      handleErrors("Error", e.message, true);
    }
  };

  const handleGoBack = () => {
    props.navigation.goBack();
  };
  return (
    <Container>
      <TGLArea>New password</TGLArea>
      <Form isNewPassword onSubmit={handleChangePassword} />
      <BackButton onPress={handleGoBack}>Back</BackButton>
    </Container>
  );
};

export default ChangePassword;
