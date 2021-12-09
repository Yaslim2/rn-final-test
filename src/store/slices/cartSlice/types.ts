export type CartItem = {
  id: string;
  gameId: string;
  type: string;
  numbers: number[];
  price: number;
  color: string;
};

export type CartItemApi = {
  id: string;
  numbers: number[];
};

export type CartSliceState = {
  items: CartItem[];
  totalAmount: number;
};
