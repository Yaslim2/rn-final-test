import React from "react";
import { BallIt, TextBall, BallTouchable } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@store/types";
import { BallProps } from "./types";

const Ball: React.FC<BallProps> = (props) => {
  const selectedBalls = useSelector(
    (state: RootState) => state.game.ballsSelected
  );

  const isSelected = selectedBalls.find(
    (ball) => ball === Number(props.number)
  );
  return (
    <BallTouchable
      useForeground
      onPress={props.onSelect.bind(this, Number(props.number))}
    >
      <BallIt isSelected={!!isSelected} color={props.color}>
        <TextBall>{props.number}</TextBall>
      </BallIt>
    </BallTouchable>
  );
};

export default Ball;
