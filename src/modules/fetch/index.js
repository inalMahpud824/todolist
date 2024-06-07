import { instance } from "../axios";

async function register(email, password) {
  try {
    const response = await instance.post(
      "/auth/register",
      { email, password },
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

async function createActivity(title, userId) {
  try {
    const response = await instance.post(
      "/activity",
      { title, userId },
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


async function getAllActivity(id) {
  try {
    const response = await instance.get(
      `/activity/user/${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

async function deleteActivity(id) {
  try {
    const response = await instance.delete(
      `/activity/${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}


async function updateActivity(id, title) {
  try {
    const response = await instance.put(
      `/activity/${id}`,
      { title },
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



export { register, sendOtp, login, createActivity, getAllActivity, deleteActivity, updateActivity };
