import styled from "styled-components/native";
import { defaultOrange, PoppinsItalicBold } from "../../shared/themes";

export const PatternTouchable = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${defaultOrange};
  border-radius: 50px;
`;

export const TextButton = styled.Text`
  font-family: ${PoppinsItalicBold};
  color: #fff;
  font-size: 15px;
`;
