import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useGetSlotAvailabilityQuery } = bookingApi;
