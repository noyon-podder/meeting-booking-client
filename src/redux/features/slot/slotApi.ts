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
    // only available slot get
    getSlotAvailability: builder.query({
      query: ({ date, roomId }) => {
        // Build query string based on available parameters
        const params: Record<string, string> = {};
        if (date) params.date = date;
        if (roomId) params.roomId = roomId;

        return {
          url: `/slots/availability`,
          params,
        };
      },
    }),

    // get all slots only admin view with is booked true
    getAllSlots: builder.query({
      query: () => {
        return "/slots";
      },
      providesTags: ["Slots"],
    }),

    // slot create
    slotCreate: builder.mutation({
      query: (slotData) => ({
        url: "/slots",
        method: "POST",
        body: slotData,
      }),
      invalidatesTags: ["Slots"],
    }),

    // slot delete
    slotDelete: builder.mutation({
      query: (slotId) => ({
        url: `/slots/${slotId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Slots"],
    }),

    // update slot properties
    updateSlot: builder.mutation({
      query: (slotUpdateData) => {
        return {
          url: `/slots/${slotUpdateData.slotId}`,
          method: "PUT",
          body: slotUpdateData,
        };
      },
      invalidatesTags: ["Slots"],
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useGetSlotAvailabilityQuery,
  useSlotDeleteMutation,
  useUpdateSlotMutation,
  useSlotCreateMutation,
} = slotApi;
