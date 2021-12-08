import styled from "styled-components/native";
import {
  borderFormColor,
  PoppinsItalicBold,
  PoppinsLight,
  primaryGrey,
  bgAccentColor,
} from "../../shared/themes";

export const Wrapper = styled.View`
  margin-top: 25px;
  margin-bottom: 25px;
  align-items: center;
`;

export const CartContainer = styled.View`
  background-color: #fff;
  width: 350px;
  border-radius: 10px;
  border: 1px solid ${borderFormColor};
`;

export const CartItemsArea = styled.View`
  width: 80%;
`;

export const CartArea = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const CartText = styled.Text`
  font-family: ${PoppinsItalicBold};
  font-size: 20px;
  color: ${primaryGrey};
`;

export const CartTotalArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-family: ${PoppinsLight};
  font-size: 20px;
  color: ${primaryGrey};
`;

export const MainButtonArea = styled.View`
  width: 100%;
  background-color: ${bgAccentColor};
`;
