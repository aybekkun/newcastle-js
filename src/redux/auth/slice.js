import { createSlice } from "@reduxjs/toolkit";
import { userAuth } from "./asyncActions";
const initialState = {
  user: {},
  token: "",
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = {};
      window.localStorage.removeItem("token");
      state.token = "";
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAuth.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isAuth = true;
      window.localStorage.setItem("token", action.payload.data.token);
    });
    builder.addCase(userAuth.pending, (state, action) => {});
    builder.addCase(userAuth.rejected, (state, action) => {
      state.user = {};
      state.isAuth = false;
      window.localStorage.removeItem("token");
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
