import React from "react";
import { TouchableMainButton, ButtonText, RightArrow } from "./styles";
import { defaultGreen, defaultOrange } from "@shared/themes";
import { MainButtonProps } from "./types";

const MainButton = (props: MainButtonProps) => {
  return (
    <TouchableMainButton isSaveCart={props.isSaveCart} {...props}>
      <ButtonText isSaveCart={props.isSaveCart}>{props.children}</ButtonText>
      {!props.isLoading && (
        <RightArrow
          name="arrow-forward"
          color={props.isSaveCart ? defaultGreen : defaultOrange}
          size={23}
        />
      )}
    </TouchableMainButton>
  );
};

export default MainButton;
