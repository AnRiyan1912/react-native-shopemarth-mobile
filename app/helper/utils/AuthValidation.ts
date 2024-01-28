import { AuthModelRegister } from "../../models/AuthModels";

export const authValidationRegister = (state: AuthModelRegister) => {
  const errors: AuthModelRegister = {
    username: "",
    address: "",
    customerName: "",
    email: "",
    mobilePhone: "",
    password: "",
  };

  if (!state.customerName) {
    errors.customerName = "Name is required";
  }
  if (!state.username) {
    errors.username = "Username is required";
  }
  if (!state.password) {
    errors.password = "Password is required";
  }
  if (!state.mobilePhone) {
    errors.mobilePhone = "Phone number is required";
  }
  if (!state.email) {
    errors.email = "Email is required";
  }
  if (!state.address) {
    errors.address = "Address is required";
  }

  return errors;
};
