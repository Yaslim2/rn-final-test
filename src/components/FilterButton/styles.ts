import styled from "styled-components/native";
import { RobotoItalicBold } from "@shared/themes";
import { ActiveStyleProps } from "./types";

export const Button = styled.TouchableOpacity<ActiveStyleProps>`
  background-color: ${(props) => (props.isActive ? props.activeColor : "#fff")};
  border: ${(props) =>
    !props.isActive ? `2px solid ${props.activeColor}` : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 34px;
  text-align: center;
  border-radius: 100px;
  margin: 0px 5px;
  margin-bottom: 13px;
`;

export const TextButton = styled.Text<ActiveStyleProps>`
  font-family: ${RobotoItalicBold};
  font-size: 14px;
  text-align: center;
  color: ${(props) => (props.isActive ? "#Fff" : props.activeColor)};
`;
