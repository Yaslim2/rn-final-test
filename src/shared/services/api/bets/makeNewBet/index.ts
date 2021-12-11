import { api } from "@shared/services";
import { CartItemApi } from "@store/slices/cartSlice/types";

const makeNewBet = async (body: { games: CartItemApi[] }) => {
  try {
    await api.post("/bet/new-bet", body);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default makeNewBet;
