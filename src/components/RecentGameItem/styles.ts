import styled from "styled-components/native";
import {
  PoppinsItalicBold,
  PoppinsLight,
  secondaryGrey,
} from "../../shared/themes";

type ColorProps = {
  mainColor?: string;
};

export const ItemContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  width: 90%;
`;

export const BeforeItem = styled.View<ColorProps>`
  width: 7px;
  height: 113px;
  margin-right: 10px;
  border-radius: 6px;
  background-color: ${(props) => props.mainColor};
`;

export const ItemArea = styled.View`
  justify-content: space-around;
`;

export const DatePriceArea = styled.View`
  flex-direction: row;
`;

export const NumbersText = styled.Text`
  font-family: ${PoppinsItalicBold};
  font-size: 14px;
  color: ${secondaryGrey};
`;

export const TypeGameText = styled.Text<ColorProps>`
  font-family: ${PoppinsItalicBold};
  font-size: 14px;
  color: ${(props) => props.mainColor};
`;

export const PriceGameText = styled.Text`
  font-family: ${PoppinsLight};
  font-size: 14px;
  color: ${secondaryGrey};
`;
