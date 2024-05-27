import axios from "axios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;
// const baseURL = 'http://localhost:8000';
// console.log(baseURL)
const instance = axios.create({ baseURL });
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance };
