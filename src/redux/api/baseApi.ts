import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store"; // Make sure to import RootState from your store

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://booking-server-blond.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Rooms", "Slots", "Bookings"],
});

export default baseApi;
