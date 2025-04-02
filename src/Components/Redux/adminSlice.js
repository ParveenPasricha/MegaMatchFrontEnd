// adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("username")),
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("Login Reducer Triggered:", action.payload);
      state.user = action.payload;
      localStorage.setItem("username", JSON.stringify(action.payload)); 
    },
    logout: (state) => {
      console.log("Logout Reducer Triggered:");
      state.user = null;
      localStorage.removeItem("username");
    },
  },
});

export const { login, logout } = adminSlice.actions;
export default adminSlice.reducer;
