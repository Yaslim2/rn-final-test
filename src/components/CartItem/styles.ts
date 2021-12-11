import styled from "styled-components/native";
import {
  PoppinsItalicBold,
  PoppinsLight,
  secondaryGrey,
} from "@shared/themes";
import { ColorProps } from "./types";

export const ItemContainer = styled.View`
  flex-direction: row;
  width: 85%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const DeleteButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AfterDeleteButton = styled.View<ColorProps>`
  width: 7px;
  height: 90px;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  margin-left: 10px;
`;

export const ContentContainer = styled.View`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 13px;
`;

export const Container = styled.View`
  width: 100%;
`;

export const TypeAndPriceArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NumbersText = styled.Text`
  font-family: ${PoppinsItalicBold};
  font-size: 15px;
  color: ${secondaryGrey};
`;

export const GameTypeText = styled.Text<ColorProps>`
  font-family: ${PoppinsItalicBold};
  font-size: 15px;
  color: ${(props) => props.color};
`;

export const PriceText = styled.Text`
  font-family: ${PoppinsLight};
  font-size: 15px;
  color: ${secondaryGrey};
`;
