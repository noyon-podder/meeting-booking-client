import { baseApi } from "@/redux/api/baseApi";
// import { TGetRoomsParams, TRoom } from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: (params) => {
        console.log({ params });
        const urlParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            urlParams.append(key, value.toString());
          }
        });

        console.log(`rooms?${urlParams.toString()}`);

        console.log({ urlParams });
        return `rooms?${urlParams.toString()}`;
      },
    }),
  }),
});

export const { useGetAllRoomsQuery } = authApi;
