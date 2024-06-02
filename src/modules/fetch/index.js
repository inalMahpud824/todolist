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
    throw new Error(error.response.data.message);
  }
}

async function sendOtp(uid, codeOtp) {
  try {
    const response = await instance.post(
      "/auth/verify-otp",
      { uid, codeOtp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

async function login(email, password) {
  try {
    const response = await instance.post(
      "/auth/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}



export { register, sendOtp, login };
