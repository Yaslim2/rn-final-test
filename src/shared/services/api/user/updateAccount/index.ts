import { api } from "@shared/services";

const updateAccount = async (body: { email: string; name: string }) => {
  try {
    await api.put("/user/update", body);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default updateAccount;
