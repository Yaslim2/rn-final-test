import {
  defaultOrange,
  PoppinsItalicBold,
  secondaryGrey,
} from "@shared/themes";
import styled from "styled-components/native";
import { isNewBetText } from "./types";
import { Ionicons } from "@expo/vector-icons";

export const GameIcon = styled(Ionicons)`
  margin-bottom: 15px;
`;

export const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MakeAGameArea = styled.View`
  flex-direction: row;
`;

export const EmptyGamesText = styled.Text<isNewBetText>`
  font-size: 17px;
  font-family: ${PoppinsItalicBold};
  color: ${(props) => (props.isNewBet ? defaultOrange : secondaryGrey)};
`;
