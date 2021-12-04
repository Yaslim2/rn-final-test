import { api } from "../../services";

const asyncResetPassword = async (email: string) => {
  try {
    const response = await fetch(`${api}/reset`, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const token: string = data.token;
    if (token) {
      return token;
    }
    throw new Error(data.message);
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export default asyncResetPassword;
