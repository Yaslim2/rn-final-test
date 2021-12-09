import React from "react";

import { Scroll } from "./styles";

const ScrollContainer: React.FC = (props) => {
  return (
    <Scroll contentContainerStyle={{ flexGrow: 1 }}>{props.children}</Scroll>
  );
};

export default ScrollContainer;
