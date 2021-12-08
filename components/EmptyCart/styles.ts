import styled from "styled-components/native";
import {
  PoppinsItalicBold,
  PoppinsItalicLight,
  PoppinsItalicRegular,
  primaryGrey,
} from "../../shared/themes";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const EmptyCartTest = styled.Text`
  font-family: ${PoppinsItalicRegular};
  color: ${primaryGrey};
  font-size: 17px;
  margin-top: 10px;
`;
