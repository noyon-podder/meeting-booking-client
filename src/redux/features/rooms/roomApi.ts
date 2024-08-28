import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createUser: builder.mutation({
    //   query: (userData) => ({
    //     url: "/auth/signup",
    //     method: "POST",
    //     body: userData,
    //   }),
    // }),

    getAllProduct: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      // providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductQuery } = authApi;
