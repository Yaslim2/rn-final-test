import styled from "styled-components/native";
import { defaultGreen, RobotoBold } from "@shared/themes";
import { AddToCartStyle } from "./types";

export const Touchable = styled.TouchableOpacity``;

export const ActionButtonContainer = styled.View<AddToCartStyle>`
  margin: 10px;
  flex-direction: row;
  justify-content: ${(props) =>
    props.isAddToCart ? "space-around" : "center"};
  align-items: center;
  font-size: 16px;
  font-family: ${RobotoBold};
  font-weight: bold;
  width: ${(props) => (props.isAddToCart ? "209px" : "164px")};
  height: 52px;
  border-radius: 10px;
  border: 1px solid ${defaultGreen};
  background-color: ${(props) => (props.isAddToCart ? defaultGreen : "#fff")};
`;

export const ButtonText = styled.Text<AddToCartStyle>`
  font-family: ${RobotoBold};
  color: ${(props) => (props.isAddToCart ? "#fff" : defaultGreen)};
  font-size: 16px;
`;

export const Trash = styled.View``;
