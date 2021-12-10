import styled from "styled-components/native";
import { PoppinsItalicRegular, primaryGrey } from "../../shared/themes";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyCartTest = styled.Text`
  font-family: ${PoppinsItalicRegular};
  color: ${primaryGrey};
  font-size: 17px;
  margin-top: 10px;
  text-align: center;
`;
