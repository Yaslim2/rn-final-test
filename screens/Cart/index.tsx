import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootBetStackNavigator } from "../../routes/App";
import { RootState } from "../../store";
import ScrollContainer from "../../components/ScrollContainer";
import { convertToReal, handleErrors } from "../../shared/helpers";
import {
  CartContainer,
  CartArea,
  CartTotalArea,
  CartText,
  TotalText,
  MainButtonArea,
  Content,
  CartItemsArea,
  Wrapper,
} from "./styles";
import MainButton from "../../components/MainButton";
import CartItem from "../../components/CartItem";
import EmptyCart from "../../components/EmptyCart";
import { asyncMakeBet, clearCart } from "../../store/slices/cartSlice";
const Cart = (props: NativeStackScreenProps<RootBetStackNavigator, "Cart">) => {
  const dispatch = useDispatch();
  const minValue = useSelector((state: RootState) => state.game.minValue!);

  const items = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const token = useSelector((state: RootState) => state.auth.user!.token);
  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: "Your cart",
    });
  }, []);

  const itemsApi = items.map((item) => {
    return { id: item.gameId, numbers: [...item.numbers] };
  });

  const handleSaveGame = async () => {
    try {
      if (totalAmount >= minValue) {
        await dispatch(asyncMakeBet(token, itemsApi));
        dispatch(clearCart());
        props.navigation.goBack();
      } else {
        handleErrors(
          "Game error",
          `The minimum stake is R$ ${convertToReal(minValue)}`,
          true
        );
      }
    } catch (e: any) {
      handleErrors("Cart error", e.message, true);
    }
  };

  const realAmount = convertToReal(totalAmount);

  const cartItemsElements = items.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <ScrollContainer>
      <Wrapper>
        <CartContainer style={{ elevation: 1 }}>
          <CartArea>
            <Content>
              <CartText>CART</CartText>
              {cartItemsElements.length === 0 ? (
                <EmptyCart />
              ) : (
                <CartItemsArea>{cartItemsElements}</CartItemsArea>
              )}
              <CartTotalArea>
                <CartText>CART </CartText>
                <TotalText>TOTAL: R$ {realAmount}</TotalText>
              </CartTotalArea>
            </Content>
            {totalAmount !== 0 ? (
              <MainButtonArea>
                <MainButton isSaveCart onPress={handleSaveGame}>
                  Save
                </MainButton>
              </MainButtonArea>
            ) : null}
          </CartArea>
        </CartContainer>
      </Wrapper>
    </ScrollContainer>
  );
};

export default Cart;
