import { api } from "@shared/services";

const resetPassword = async (body: { email: string }) => {
  try {
    const response = await api.post("reset", body);
    const data = response.data;
    const token: string = data.token;
    if (token) {
      return token;
    }
    throw new Error(data.message);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default resetPassword;
