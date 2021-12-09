export type BetApi = {
  id: number;
  user_id: number;
  game_id: number;
  choosen_numbers: string;
  price: number;
  created_at: string;
  ["type"]: {
    id: string;
    type: string;
  };
};

export type BetSliceState = {
  gameSelected: string[];
  games: BetApi[];
};
