/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
// import { TGetRoomsParams, TRoom } from "@/types";

// interface GetRoomsQueryParams {
//   searchTerm?: string;
//   filter?: string;
//   sort?: string;
// }
const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getRooms: builder.query<any, GetRoomsQueryParams>({
    //   query: ({ searchTerm, filter, sort } = {}) => {
    //     const queryParams: string[] = [];

    //     if (searchTerm) {
    //       queryParams.push(`searchTerm=${searchTerm}`);
    //     }

    //     if (filter) {
    //       queryParams.push(`filter=${filter}`);
    //     }

    //     if (sort) {
    //       queryParams.push(`sort=${sort}`);
    //     }

    //     const queryString =
    //       queryParams.length > 0 ? `?${queryParams.join("&")}` : "";

    //     return `rooms${queryString}`;
    //   },
    //   providesTags: ["Rooms"],
    // }),

    getSlots: builder.query({
      query: () => {
        return "/slots/availability";
      },
      providesTags: ["Slots"],
    }),

    getSingleRoom: builder.query({
      query: (roomId) => {
        return {
          url: `/rooms/${roomId}`,
          method: "GET",
        };
      },
    }),

    slotCreate: builder.mutation({
      query: (slotData) => ({
        url: "/slots",
        method: "POST",
        body: slotData,
      }),
      invalidatesTags: ["Slots"],
    }),

    slotDelete: builder.mutation({
      query: (slotId) => ({
        url: `/slots/${slotId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Slots"],
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
  useGetSingleRoomQuery,
  //   useGetRoomsQuery,
  useGetSlotsQuery,
  useSlotDeleteMutation,
  useUpdateRoomMutation,
  useSlotCreateMutation,
} = slotApi;
