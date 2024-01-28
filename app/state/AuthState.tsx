import { useState } from "react";
import { AuthModelLogin, AuthModelRegister } from "../models/AuthModels";
import { authValidationRegister } from "../helper/utils/AuthValidation";

export const authStateLogin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [authInput, setAuthInput] = useState<AuthModelLogin>({
    username: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleAuthInput = (field: string, value: string) => {
    setAuthInput((prevAuth) => ({ ...prevAuth, [field]: value }));
  };

  return {
    showPassword,
    authInput,
    handleAuthInput,
    handleShowPassword,
    setAuthInput,
  };
};

export const authStateRegister = () => {
  const [showErorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [authInput, setAuthInput] = useState<AuthModelRegister>({
    customerName: "",
    username: "",
    password: "",
    email: "",
    mobilePhone: "",
    address: "",
  });

  const handleAuthInput = (field: string, value: string) => {
    setAuthInput((prevAuth) => ({ ...prevAuth, [field]: value }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const errors = authValidationRegister(authInput);
  return {
    errors,
    handleAuthInput,
    setAuthInput,
    setShowErrorMessage,
    showErorMessage,
    authInput,
    showPassword,
    handleShowPassword,
  };
};
