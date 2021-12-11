import { api } from "@shared/services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiError, ApiUser, TokenApi } from "@store/slices/authSlice/types";

const createUser = async (body: {
  email: string;
  password: string;
  name: string;
}) => {
  try {
    const response = await api.post("user/create", body);
    console.log(response);
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
    if (data.error) {
      const error: ApiError = data.error;
      throw new Error(error.message);
    }
  } catch (e: any) {
    throw new Error(e.response.data.error.message);
  }
};

export default createUser;
