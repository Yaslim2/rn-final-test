import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TouchableMainButton, ButtonText, RightArrow } from "./styles";
import { primaryGrey } from "@shared/themes";

const SignUpButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableMainButton {...props}>
      <ButtonText>{props.children}</ButtonText>
      <RightArrow name="arrow-forward" color={primaryGrey} size={23} />
    </TouchableMainButton>
  );
};

export default SignUpButton;
