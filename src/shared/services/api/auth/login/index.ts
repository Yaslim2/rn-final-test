import { api } from "@shared/services";
import { ApiUser, TokenApi } from "@store/slices/authSlice/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loginUser = async (body: { email: string; password: string }) => {
  try {
    const response = await api.post("login", body);
    const data = response.data;
    if (data.user) {
      const user: ApiUser = data.user;
      const token: TokenApi = data.token;
      await AsyncStorage.setItem("@token", token.token);
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        bets: [],
      };
    }
    if (data.message) {
      throw new Error(data.message);
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};
export default loginUser;
