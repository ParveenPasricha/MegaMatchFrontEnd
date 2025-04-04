import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("Login Reducer Triggered:", action.payload);
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            console.log("Logout Reducer Triggered:");
            state.user = null;
            localStorage.removeItem("token");
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
