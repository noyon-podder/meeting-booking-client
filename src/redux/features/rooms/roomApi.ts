/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
// import { TGetRoomsParams, TRoom } from "@/types";

interface GetRoomsQueryParams {
  searchTerm?: string;
  filter?: string;
  sort?: string;
}
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

        if (params) {
          console.log({ urlParams });
          return `rooms?${urlParams.toString()}`;
        } else {
          return "/rooms";
        }
      },
    }),

    getRooms: builder.query<any, GetRoomsQueryParams>({
      query: ({ searchTerm, filter, sort } = {}) => {
        const queryParams: string[] = [];

        if (searchTerm) {
          queryParams.push(`searchTerm=${searchTerm}`);
        }

        if (filter) {
          queryParams.push(`filter=${filter}`);
        }

        if (sort) {
          queryParams.push(`sort=${sort}`);
        }

        const queryString =
          queryParams.length > 0 ? `?${queryParams.join("&")}` : "";

        return `rooms${queryString}`;
      },
      providesTags: ["Rooms"],
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

    roomCreate: builder.mutation({
      query: (roomData) => ({
        url: "/rooms",
        method: "POST",
        body: roomData,
      }),
      invalidatesTags: ["Rooms"],
    }),

    roomDelete: builder.mutation({
      query: (roomId) => ({
        url: `/rooms/${roomId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Rooms"],
    }),

    updateRoom: builder.mutation({
      query: ({ roomId, roomUpdateData }) => ({
        url: `/rooms/${roomId}`,
        method: "PUT",
        body: roomUpdateData,
      }),
      invalidatesTags: ["Rooms"],
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetSingleRoomQuery,
  useGetRoomsQuery,
  useRoomDeleteMutation,
  useUpdateRoomMutation,
  useRoomCreateMutation,
} = roomAPi;
