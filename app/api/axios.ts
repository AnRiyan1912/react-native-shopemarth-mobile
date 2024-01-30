import axios from "axios";
import * as SecureStorage from "expo-secure-store";

export const api = axios.create({
  baseURL: "http://10.0.2.2:1919",
});

api.interceptors.request.use((config) => {
  const token = SecureStorage.getItem("auth");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  }
  (err) => {
    return Promise.reject(err);
  };
});
