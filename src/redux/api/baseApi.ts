import { jwtDecode } from "jwt-decode";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store"; // Make sure to import RootState from your store
import toast from "react-hot-toast";
import { logout } from "../features/auth/authSlice";
// Extend fetchBaseQuery to handle token expiration and errors
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`,
      prepareHeaders: (headers) => {
        const token = (api.getState() as RootState).auth.token;

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }

        return headers;
      },
    });

    // Call the baseQuery
    const result = await baseQuery(args, api, extraOptions);

    // Check for token expiration or other errors
    const token = (api.getState() as RootState).auth.token;

    if (token) {
      try {
        // Decode the token to get the expiration time
        const decodedToken: { exp: number } = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        // Check if the token is expired
        if (decodedToken.exp < currentTime) {
          // Log out the user
          api.dispatch(logout());
          toast.error("Session expired. Please log in again.");
        }
      } catch (e) {
        // Handle token decoding errors
        console.error("Token decoding error", e);
      }
    }

    // Handle error based on the result
    // if (result.error) {
    //   toast.error("An error occurred");
    // }

    return result; // Return the result from baseQuery
  },
  endpoints: () => ({}),
  tagTypes: ["Rooms", "Slots", "Bookings"],
});

export default baseApi;
