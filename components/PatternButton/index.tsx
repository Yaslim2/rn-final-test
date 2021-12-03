import React from "react";
import { PatternTouchable, TextButton } from "./styles";

const PatternButton: React.FC = (props) => {
  return (
    <PatternTouchable>
      <TextButton>{props.children}</TextButton>
    </PatternTouchable>
  );
};

export default PatternButton;
