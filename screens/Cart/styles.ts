import styled from "styled-components/native";
import {
  borderFormColor,
  PoppinsItalicBold,
  PoppinsLight,
  primaryGrey,
  bgAccentColor,
} from "../../shared/themes";

type WrapperProps = {
  onReduce: number;
};

export const Wrapper = styled.View<WrapperProps>`
  flex: ${(props) => props.onReduce};
`;

export const CartContainer = styled.View`
  background-color: #fff;
  margin: 20px;
  flex: 1;
  border-radius: 10px;
  border: 1px solid ${borderFormColor};
`;

export const CartItemsArea = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const CartArea = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
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
