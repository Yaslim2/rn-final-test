import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ActionButtonContainer, Touchable, ButtonText, Trash } from "./styles";
import { BetActionButtonProps } from "./types";

const BetActionButton: React.FC<BetActionButtonProps> = (props) => {
  return (
    <Touchable onPress={props.onPress}>
      <ActionButtonContainer isAddToCart={props.isAddToCart}>
        {props.isAddToCart ? (
          <>
            <Ionicons name="cart" size={26} color="#fff" />
            <ButtonText isAddToCart>{props.children}</ButtonText>
            <Trash />
          </>
        ) : (
          <ButtonText>{props.children}</ButtonText>
        )}
      </ActionButtonContainer>
    </Touchable>
  );
};

export default BetActionButton;
