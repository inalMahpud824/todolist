import { instance } from "../axios";

async function register(email, password) {
  try {
    const response = await instance.post("/auth/register", { email, password });
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
    const response = await instance.get(`/activity/user/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
async function getActivityById(id) {
  try {
    const response = await instance.get(`/activity/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

async function deleteActivity(id) {
  try {
    const response = await instance.delete(`/activity/${id}`);
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

async function getAllItems(id) {
  try {
    const response = await instance.get(`/items/activity/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

async function createItem(activity_id, title) {
  try {
    const response = await instance.post(
      "/items",
      { activity_id, title, isActive: true },
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

async function updateItem(id, activity_id, title, isActive) {
  try {
    const response = await instance.put(
      `/items/${id}`,
      { activity_id, title, isActive},
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

async function deleteItem(id) {
  try {
    const response = await instance.delete(`/items/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export {
  register,
  sendOtp,
  login,
  createActivity,
  getAllActivity,
  getActivityById,
  deleteActivity,
  updateActivity,
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
};
