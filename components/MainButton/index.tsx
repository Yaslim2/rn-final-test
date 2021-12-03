import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TouchableMainButton, ButtonText, RightArrow } from "./styles";
import { defaultOrange } from "../../shared/themes";

// import { Container } from './styles';

const MainButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableMainButton {...props}>
      <ButtonText>{props.children}</ButtonText>
      <RightArrow name="arrow-forward" color={defaultOrange} size={23} />
    </TouchableMainButton>
  );
};

export default MainButton;
