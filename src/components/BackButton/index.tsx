import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TouchableMainButton, ButtonText, LeftArrow } from "./styles";
import { primaryGrey } from "@shared/themes";

const BackButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableMainButton {...props}>
      <LeftArrow name="arrow-back" color={primaryGrey} size={23} />
      <ButtonText>{props.children}</ButtonText>
    </TouchableMainButton>
  );
};

export default BackButton;
