import styled from "styled-components/native";
import {
  borderFormColor,
  PoppinsItalicBold,
  primaryGrey,
} from "../../shared/themes";

export const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RecentGamesText = styled.Text`
  font-family: ${PoppinsItalicBold};
  font-size: 24px;
  color: ${primaryGrey};
`;

export const HomeContainer = styled.View`
  flex: 1;
  margin: 15px;
`;

export const FilterButtonsArea = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 13px;
  margin-bottom: 13px;
`;

export const MainButtonHomeArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 13px;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 10px;

  border: 1px solid ${borderFormColor};
`;
