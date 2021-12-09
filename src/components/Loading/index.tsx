import React from "react";
import { primaryGrey } from "@shared/themes";
import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={primaryGrey} />
    </Container>
  );
};

export default Loading;
