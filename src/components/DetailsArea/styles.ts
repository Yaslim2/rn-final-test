import styled from "styled-components/native";
import { PoppinsItalicBold, primaryGrey } from "../../shared/themes";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const TextContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TGAText = styled.Text`
  font-family: ${PoppinsItalicBold};
  color: ${primaryGrey};
  font-size: 30px;
`;

export const ButtonContainer = styled.View`
  width: 80px;
`;

export const LotteryTextContainer = styled.View`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const LotteryText = styled.Text`
  font-family: ${PoppinsItalicBold};
  color: ${primaryGrey};
  font-size: 38px;
`;
