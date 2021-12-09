import React from "react";
import { Button, TextButton } from "./styles";
import { FilterButtonProps } from "./types";
const FilterButton = (props: FilterButtonProps) => {
  return (
    <Button {...props} isActive={props.isActive} activeColor={props.color}>
      <TextButton isActive={props.isActive} activeColor={props.color}>
        {props.children}
      </TextButton>
    </Button>
  );
};

export default FilterButton;
