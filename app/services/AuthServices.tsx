import { api } from "../api/axios";
import { AuthModelLogin, AuthModelRegister } from "../models/AuthModels";
import { Api } from "../constants/ApiUrl";
import axios from "axios";
import * as SecureStorage from "expo-secure-store";

export const authLogin = async (authValue: AuthModelLogin) => {
  try {
    const response = await axios.post(Api.auth.login, authValue);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const authRegisterCustomer = async (authValue: AuthModelRegister) => {
  try {
    const response = await axios.post(Api.auth.registerCustomer, authValue);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const authRegisterAdmin = async (authValue: AuthModelRegister) => {
  try {
    const response = await api.post(Api.auth.registerAdmin, authValue);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getAdminById = async (adminId: string) => {
  try {
    axios.interceptors.request.use((config) => {
      const token = SecureStorage.getItem("auth");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;

        return config;
      }
      (err) => {
        return Promise.reject(err);
      };
    });
    const response = await api.get(Api.auth.getAdminById + adminId);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCustomerById = async (customerId: string) => {
  try {
    axios.interceptors.request.use((config) => {
      const token = SecureStorage.getItem("auth");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;

        return config;
      }
      (err) => {
        return Promise.reject(err);
      };
    });
    const response = await axios.get(Api.auth.getCustomerById + customerId);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
