import styled from "styled-components/native";
import {
  defaultOrange,
  PoppinsBold,
  PoppinsItalicBold,
  bgAccentColor,
  defaultGreen,
} from "../../shared/themes";
import { Ionicons } from "@expo/vector-icons";

type ButtonTextProps = {
  isSaveCart?: boolean;
};

type TouchableProps = {
  isSaveCart?: boolean;
};

export const TouchableMainButton = styled.TouchableOpacity<TouchableProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${(props) => (props.isSaveCart ? "10px" : "0px")};
  padding-bottom: ${(props) => (props.isSaveCart ? "10px" : "0px")};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: ${PoppinsItalicBold};
  font-size: 24px;
  color: ${(props) => (props.isSaveCart ? defaultGreen : defaultOrange)};
  margin-right: 0px;
`;

export const RightArrow = styled(Ionicons)`
  margin-left: 10px;
`;
