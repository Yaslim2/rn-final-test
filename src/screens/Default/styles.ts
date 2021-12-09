import styled from "styled-components/native";
import {
  bgDefaultColor,
  PoppinsItalicBold,
  PoppinsItalicRegular,
  primaryGrey,
} from "../../shared/themes";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionsArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const MainButtonArea = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 150px;
`;

export const ActionsText = styled.Text`
  font-family: ${PoppinsItalicRegular};
  color: ${primaryGrey};
  font-size: 15px;
`;

export const ActionsBoldText = styled.Text`
  font-family: ${PoppinsItalicBold};
  color: ${primaryGrey};
  font-size: 15px;
`;
