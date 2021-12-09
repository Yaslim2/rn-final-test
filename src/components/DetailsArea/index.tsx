import React from "react";
import PatternButton from "../PatternButton";
import {
  Container,
  TextContainer,
  LotteryTextContainer,
  TGAText,
  LotteryText,
  ButtonContainer,
} from "./styles";

const DetailsArea: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <TGAText>The</TGAText>
        <TGAText>Greatest</TGAText>
        <TGAText>App</TGAText>
      </TextContainer>

      <ButtonContainer>
        <PatternButton>for</PatternButton>
      </ButtonContainer>

      <LotteryTextContainer>
        <LotteryText>LOTTERY</LotteryText>
      </LotteryTextContainer>
    </Container>
  );
};

export default DetailsArea;
