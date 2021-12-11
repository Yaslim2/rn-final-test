import styled from "styled-components/native";
import { defaultOrange, PoppinsItalicBold, primaryGrey } from "@shared/themes";
export const TextArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TGLText = styled.Text`
  font-family: ${PoppinsItalicBold};
  color: ${primaryGrey};
  font-size: 45px;
`;

export const TitleTextArea = styled.View`
  margin-top: 50px;
`;

export const TitleText = styled.Text`
  font-family: ${PoppinsItalicBold};
  color: ${primaryGrey};
  font-size: 23px;
`;

export const AfterText = styled.View`
  width: 110px;
  height: 7px;
  background-color: ${defaultOrange};
  border-radius: 6px;
  margin-top: -7px;
`;
