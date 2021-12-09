import React from "react";

import {
  TextArea,
  AfterText,
  TGLText,
  TitleText,
  TitleTextArea,
} from "./styles";

const TGLArea: React.FC = (props) => {
  return (
    <>
      <TextArea>
        <TGLText>TGL</TGLText>
        <AfterText />
      </TextArea>
      <TitleTextArea>
        <TitleText>{props.children}</TitleText>
      </TitleTextArea>
    </>
  );
};

export default TGLArea;
