import React from "react";
import { CartItem as CartItemType } from "@store/slices/cartSlice/types";
import { removeFromCart } from "@store/slices/cartSlice";
import { Ionicons } from "@expo/vector-icons";
import { secondaryGrey } from "@shared/themes";
import { convertToReal } from "@shared/helpers";
import {
  ItemContainer,
  ContentContainer,
  DeleteButton,
  TypeAndPriceArea,
  AfterDeleteButton,
  Container,
  GameTypeText,
  NumbersText,
  PriceText,
} from "./styles";
import { useDispatch } from "react-redux";

const CartItem: React.FC<{ item?: CartItemType }> = (props) => {
  const dispatch = useDispatch();
  const numbersWithZero = props.item?.numbers.map((number) =>
    number <= 9 ? "0" + number : number
  );

  const numbers = numbersWithZero?.join(", ");
  const price = convertToReal(props.item!.price);

  const handleDeleteItem = (id: string) => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <ItemContainer>
      <DeleteButton onPress={handleDeleteItem.bind(this, props.item!.id)}>
        <Ionicons name="trash" color={secondaryGrey} size={23} />
        <AfterDeleteButton color={props.item?.color} />
      </DeleteButton>
      <ContentContainer>
        <Container>
          <NumbersText>{numbers}</NumbersText>
          <TypeAndPriceArea>
            <GameTypeText color={props.item?.color}>
              {props.item?.type}{" "}
            </GameTypeText>
            <PriceText>R$ {price}</PriceText>
          </TypeAndPriceArea>
        </Container>
      </ContentContainer>
    </ItemContainer>
  );
};

export default CartItem;
