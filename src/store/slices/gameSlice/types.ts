export type Game = {
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};

export type GameWithId = {
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
  id: string;
};

export type GameRules = {
  min_cart_value: number;
  types: Game[];
};

export type GameSliceState = {
  minValue: number | null;
  avaiableGames: Game[];
  selectedGame: GameWithId | null;
  ballsSelected: number[];
  ballsNotSelected: number[];
};
