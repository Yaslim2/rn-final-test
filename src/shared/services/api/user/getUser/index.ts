import { api } from "@shared/services";

const getUser = async () => {
  try {
    const response = await api.get("/user/my-account");
    return response.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default getUser;
