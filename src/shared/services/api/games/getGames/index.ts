import { api } from "@shared/services";
import { GameRules } from "@store/slices/gameSlice/types";

const getGames = async () => {
  try {
    const response = await api.get("cart_games");
    const data: GameRules = response.data;
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default getGames;
