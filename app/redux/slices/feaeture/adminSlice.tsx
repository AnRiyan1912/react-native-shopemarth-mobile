import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAdminById } from "../../../services/AuthServices";
import { Admin } from "../../../models/AuthModels";

const initialState: Admin = {
  id: "",
  name: "",
  phoneNumber: "",
  userCredential: {
    id: "",
    username: "",
    role: "",
  },
};

export const getAdmin = createAsyncThunk(
  "admin.getAadminById",
  async (adminId: string) => {
    const response = await getAdminById(adminId);
    return response;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default adminSlice.reducer;
