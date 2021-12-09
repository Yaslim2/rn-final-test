import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { primaryGrey } from "@shared/themes";

import { Container, EmptyCartTest } from "./styles";

const EmptyCart: React.FC = () => {
  return (
    <Container>
      <FontAwesome5 name="dizzy" color={primaryGrey} size={55} />
      <EmptyCartTest>
        No items around here, add the first item of your cart!
      </EmptyCartTest>
    </Container>
  );
};

export default EmptyCart;
