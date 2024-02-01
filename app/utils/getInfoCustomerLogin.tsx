import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import { JwtModel } from "../models/JwtModel";
import { useEffect } from "react";
import { getCustomer } from "../redux/slices/feaeture/customerSlices";
import { useDispatch } from "react-redux";

export const getInfoCustomerLogin = () => {
  const getToken = async () => {
    const token = await SecureStore.getItemAsync("auth");
    decodeToken(token);
  };

  const decodeToken = (token: string) => {
    const user: JwtModel = jwtDecode(token);

    profileUser(user);
  };
  const dispatch = useDispatch();
  const profileUser = (token: JwtModel) => {
    if (token.role == "ROLE_ADMIN") {
    }
    if (token.role == "ROLE_CUSTOMER") {
      dispatch(getCustomer(token.userId));
    }
  };

  useEffect(() => {
    getToken();
  }, []);
};
