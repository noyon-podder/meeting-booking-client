import { baseApi } from "@/redux/api/baseApi";
// import { TGetRoomsParams, TRoom } from "@/types";

const roomAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: (params) => {
        console.log({ params });
        const urlParams = new URLSearchParams();

        if (
          params ||
          params.capacity !== 0 ||
          params.minPrice !== 0 ||
          params.maxPrice !== 0
        ) {
          Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
              urlParams.append(key, value.toString());
            }
          });
        }

        console.log(`rooms?${urlParams.toString()}`);

        console.log({ urlParams });
        return `rooms?${urlParams.toString()}`;
      },
    }),

    getSingleRoom: builder.query({
      query: (roomId) => {
        console.log(`/rooms/${roomId}`);
        return {
          url: `/rooms/${roomId}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllRoomsQuery, useGetSingleRoomQuery } = roomAPi;
