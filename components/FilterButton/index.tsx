import React from "react";
import { TouchableOpacityComponent, TouchableOpacityProps } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectFilterGame } from "../../store/slices/betSlice";
import { Button, TextButton } from "./styles";
const FilterButton = (
  props: TouchableOpacityProps & { isActive?: boolean; color: string }
) => {
  return (
    <Button {...props} isActive={props.isActive} activeColor={props.color}>
      <TextButton isActive={props.isActive} activeColor={props.color}>
        {props.children}
      </TextButton>
    </Button>
  );
};

export default FilterButton;
