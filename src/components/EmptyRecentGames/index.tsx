import React from "react";
import { Centered, EmptyGamesText, MakeAGameArea, GameIcon } from "./styles";
import { primaryGrey } from "@shared/themes";

const EmptyRecentGames: React.FC = () => {
  return (
    <Centered>
      <GameIcon name="ios-game-controller" size={65} color={primaryGrey} />
      <EmptyGamesText>No games around here...</EmptyGamesText>
      <EmptyGamesText>Make a game clicking on the</EmptyGamesText>
      <MakeAGameArea>
        <EmptyGamesText isNewBet>New bet </EmptyGamesText>
        <EmptyGamesText>button</EmptyGamesText>
      </MakeAGameArea>
    </Centered>
  );
};

export default EmptyRecentGames;
