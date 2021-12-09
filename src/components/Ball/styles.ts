import styled from "styled-components/native";
import { RobotoBold } from "../../shared/themes";
import { ballColor } from "../../shared/themes/colors";
import { BallColorStyle } from "./types";

export const BallTouchable = styled.TouchableNativeFeedback``;

export const BallIt = styled.View<BallColorStyle>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${(props) => (props.isSelected ? props.color : ballColor)};
  justify-content: center;
  align-items: center;
  margin: 7px;
`;

export const TextBall = styled.Text`
  font-family: ${RobotoBold};
  font-size: 17px;
  color: #fff;
`;
