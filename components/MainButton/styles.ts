import styled from "styled-components/native";
import {
  defaultOrange,
  PoppinsBold,
  PoppinsItalicBold,
  bgAccentColor,
} from "../../shared/themes";
import { Ionicons } from "@expo/vector-icons";

export const TouchableMainButton = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${PoppinsItalicBold};
  font-size: 24px;
  color: ${defaultOrange};
  margin-right: 0px;
`;

export const RightArrow = styled(Ionicons)`
  margin-left: 10px;
`;
