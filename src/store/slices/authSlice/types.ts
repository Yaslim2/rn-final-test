export type Game = {
  numbers: number[];
  price: number;
  date: string;
  type: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  bets: Game[];
};

export type ApiUser = {
  created_at: string;
  email: string;
  id: number;
  name: string;
  updated_at: string;
};

export type TokenApi = {
  expires_at: string;
  token: string;
  type: string;
};

export type ApiError = {
  message: string;
};

export type AuthSliceState = {
  user: User | null;
};
