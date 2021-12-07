import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootBetStackNavigator } from "../../routes/App";
import { RootState } from "../../store";

// import { Container } from './styles';

const Cart = (props: NativeStackScreenProps<RootBetStackNavigator, "Cart">) => {
  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
    });
  }, []);

  return (
    <View>
      {items.map((item, index) => (
        <Text key={index}>{item.price}</Text>
      ))}
    </View>
  );
};

export default Cart;
