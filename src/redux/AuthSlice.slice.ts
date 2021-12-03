import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../models/Auth/IAuth";
import { IUser } from "../models/user/IUser";

const initialState: IAuth = {
  token: "",
  user: {
    user_id: "",
    display_name: "",
    email: "",
    password: "",
    cover_photo: "",
    display_picture: "",
  },
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signInDispatch: (state, action: PayloadAction<IAuth>) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    },
    signOutDispatch: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      return {
        ...state,
        token: "",
        user: {
          user_id: "",
          display_name: "",
          email: "",
          password: "",
          cover_photo: "",
          display_picture: "",
        },
      };
    },
    setUserDispatch: (state) => {
      const token = localStorage.getItem("token")!;
      const userData = JSON.parse(localStorage.getItem("user")!);

      return {
        ...state,
        token: token,
        user: userData,
      };
    },
  },
});

export const { signInDispatch, signOutDispatch, setUserDispatch } =
  authSlice.actions;

export default authSlice.reducer;
