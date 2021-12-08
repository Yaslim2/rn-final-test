import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TouchableMainButton, ButtonText, RightArrow } from "./styles";
import { defaultGreen, defaultOrange } from "../../shared/themes";

// import { Container } from './styles';

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
  isSaveCart?: boolean;
};

const MainButton = (props: ButtonProps) => {
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
