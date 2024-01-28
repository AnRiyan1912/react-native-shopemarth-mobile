import axios from "axios";
import { api } from "../api/axios";
import { AuthModelLogin, AuthModelRegister } from "../models/AuthModels";
import { Api } from "../constants/ApiUrl";

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
    const response = await axios.post(Api.auth.registerAdmin, authValue);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
