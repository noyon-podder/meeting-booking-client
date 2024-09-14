import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["Bookings"],
    }),

    // getSlotAvailability: builder.query({
    //   query: ({ date, roomId }) => {
    //     // Build query string based on available parameters
    //     const params: Record<string, string> = {};
    //     if (date) params.date = date;
    //     if (roomId) params.roomId = roomId;

    //     return {
    //       url: `/slots/availability`,
    //       params,
    //     };
    //   },
    // }),

    myBookings: builder.query({
      query: () => {
        return "/my-bookings";
      },
      providesTags: ["Bookings"],
    }),

    getAllBookings: builder.query({
      query: () => {
        return "/bookings";
      },
      providesTags: ["Bookings"],
    }),

    updateBookingStatus: builder.mutation({
      query: ({ id, isConfirmed }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: { isConfirmed },
      }),
      invalidatesTags: ["Bookings"],
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const {
  // useGetSlotAvailabilityQuery,
  useMyBookingsQuery,
  useGetAllBookingsQuery,
  useCreateBookingMutation,
  useUpdateBookingStatusMutation,
  useDeleteBookingMutation,
} = bookingApi;
