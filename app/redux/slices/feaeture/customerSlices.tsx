import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Customer } from "../../../models/AuthModels";
import { getAdminById, getCustomerById } from "../../../services/AuthServices";

const initialState: Customer = {
  id: "",
  customerName: "",
  address: "",
  phone: "",
  email: "",
};

export const getCustomer = createAsyncThunk(
  "customer.getCustomerById",
  async (customerId: string) => {
    const response = await getCustomerById(customerId);
    return response;
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.id = action.payload.data.id;
      state.customerName = action.payload.data.customerName;
      state.address = action.payload.data.address;
      state.phone = action.payload.data.phone;
      state.email = action.payload.data.email;
    });
    builder.addCase(getCustomer.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export default customerSlice.reducer;
