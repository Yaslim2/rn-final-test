import styled from "styled-components/native";
import {
  placeholderColor,
  PoppinsItalicBold,
  PoppinsItalicRegular,
  borderColor,
  forgotPasswordColor,
  borderFormColor,
} from "@shared/themes";

export const FormContainer = styled.KeyboardAvoidingView`
  width: 100%;
`;

export const TextInputArea = styled.View`
  width: 100%;
  border-bottom-color: ${borderColor};
  border-bottom-width: 2px;
`;

export const Input = styled.TextInput`
  font-family: ${PoppinsItalicBold};
  color: ${placeholderColor};
  font-size: 14px;
  padding: 15px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  color: ${forgotPasswordColor};
  justify-content: center;
  align-items: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  font-family: ${PoppinsItalicRegular};
  color: ${forgotPasswordColor};
  font-size: 13px;
`;

export const MainButtonArea = styled.View`
  width: 100%;
  padding: 15px;
`;

export const FormArea = styled.View`
  margin-top: 15px;
  width: 250px;
  background-color: #fff;
  border: 1px solid ${borderFormColor};
  border-radius: 14px;
`;
