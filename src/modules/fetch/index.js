import { instance } from "../axios";

async function register(email, password) {
  try {
    const response = await instance.post(
      "/auth/register",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Internal server error!");
  }
}
export {register}

