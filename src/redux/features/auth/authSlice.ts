import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: TUser | null;
  token: string | null;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // set current user
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    // logout to user
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const currentUser = (state: RootState) => state.auth.user;
export const currentToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
