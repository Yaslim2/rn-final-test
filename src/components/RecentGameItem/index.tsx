import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { convertToReal } from "@shared/helpers";
import { RootState } from "@store/types";
import {
  ItemContainer,
  BeforeItem,
  ItemArea,
  DatePriceArea,
  NumbersText,
  PriceGameText,
  TypeGameText,
} from "./styles";
import { RecentGameItemProps } from "./types";

const RecentGameItem: React.FC<RecentGameItemProps> = (props) => {
  const avaiableGames = useSelector(
    (state: RootState) => state.game.avaiableGames
  );

  const typeGame = avaiableGames.find(
    (game) => game.type === props.item.type.type
  );

  let color;
  if (typeGame) {
    color = typeGame.color;
  }

  const date = moment(props.item.created_at)
    .locale("pt-br")
    .format("DD/MM/YYYY");

  return (
    <ItemContainer>
      <BeforeItem mainColor={color} />
      <ItemArea>
        <NumbersText>{props.item.choosen_numbers}</NumbersText>
        <DatePriceArea>
          <PriceGameText>{date} - </PriceGameText>
          <PriceGameText>R$ {convertToReal(props.item.price)}</PriceGameText>
        </DatePriceArea>
        <TypeGameText mainColor={color}>{props.item.type.type}</TypeGameText>
      </ItemArea>
    </ItemContainer>
  );
};

export default RecentGameItem;
