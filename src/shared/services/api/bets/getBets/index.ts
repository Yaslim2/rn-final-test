import { api } from "@shared/services";
import { BetApi } from "@store/slices/betSlice/types";

const getBets = async (filters: string[]) => {
  let url = `bet/all-bets`;
  filters.forEach((game, index) => {
    if (index === 0) {
      url += `?type%5B%5D=${game}`;
    } else {
      url += `&type%5B%5D=${game}`;
    }
  });
  const response = await api.get(url);
  const data: BetApi[] = response.data;
  const newData = [...data];

  newData.sort((a: BetApi, b: BetApi) => {
    const dateOne = new Date(a.created_at).getTime();
    const dateTwo = new Date(b.created_at).getTime();
    return dateTwo - dateOne;
  });
  return newData;
};

export default getBets;
