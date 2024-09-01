import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store"; // Make sure to import RootState from your store

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://meeting-booking-server.vercel.app/api",
    baseUrl: "http://localhost:5000/api",

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token; // Assuming you store the token in auth slice

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Rooms"],
});

export default baseApi;
