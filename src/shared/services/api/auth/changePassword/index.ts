import { api } from "@shared/services";

const changePassword = async (body: { token: string; password: string }) => {
  try {
    await api.post(`reset/${body.token}`, { password: body.password });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default changePassword;
