import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

type TUserInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
};

type TAuthState = {
  user: TUser | null;
  token: string | null;
  userInfo: TUserInfo | null;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  userInfo: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // set current user
    setUser: (state, action) => {
      const { user, token, userInfo } = action.payload;
      state.user = user;
      state.token = token;
      state.userInfo = userInfo;
    },

    // logout to user
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const currentUser = (state: RootState) => state.auth.user;
export const currentToken = (state: RootState) => state.auth.token;
export const currentUserInfo = (state: RootState) => state.auth.userInfo;

export default authSlice.reducer;
