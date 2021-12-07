import styled from "styled-components/native";
import {
  PoppinsItalicBold,
  PoppinsItalicLight,
  PoppinsItalicRegular,
  primaryGrey,
  secondaryGrey,
} from "../../shared/themes";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NewBetContainer = styled.View`
  margin: 20px;
`;

export const NewBetArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const NewBetText = styled.Text`
  font-family: ${PoppinsItalicBold};
  font-size: 24px;
  color: ${primaryGrey};
`;

export const GameTypeText = styled.Text`
  font-family: ${PoppinsItalicLight};
  font-size: 24px;
  color: ${primaryGrey};
`;

export const ChooseAGameText = styled.Text`
  font-size: 16px;
  color: ${secondaryGrey};
  font-family: ${PoppinsItalicBold};
`;

export const PickerArea = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const FillYourBetText = styled.Text`
  font-size: 15px;
  color: ${secondaryGrey};
  font-family: ${PoppinsItalicBold};
`;

export const DescriptionText = styled.Text`
  font-size: 15px;
  color: ${secondaryGrey};
  font-family: ${PoppinsItalicRegular};
`;

export const BallsArea = styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const ActionButtonArea = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
