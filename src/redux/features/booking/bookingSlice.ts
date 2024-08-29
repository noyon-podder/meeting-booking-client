import { createSlice } from "@reduxjs/toolkit";

type TBookingSliceState = {
  slotValue: string[];
};

const initialState: TBookingSliceState = {
  slotValue: [],
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setSlotValue: (state, action) => {
      state.slotValue.push(action.payload);
    },
  },
});

export const { setSlotValue } = bookingSlice.actions;

export default bookingSlice.reducer;
