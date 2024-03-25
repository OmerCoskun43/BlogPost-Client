import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.JWT;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.JWT;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.token = "";
    },
  },
});

export const {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
