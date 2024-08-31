import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SetBookingInfoPayload {
  date: string;
  userId: string;
  roomId: string;
  name: string;
  phoneNumber: string;
  email: string;
  slots: string[];
  slotLabel: string[];
}

type TBookingSliceState = {
  userId: string;
  roomId: string;
  name: string;
  phoneNumber: string;
  email: string;
  date: string;
  slotValue: string[];
  slotLabel: string[];
};

const initialState: TBookingSliceState = {
  userId: "",
  roomId: "",
  phoneNumber: "",
  name: "",
  email: "",
  date: "",
  slotValue: [],
  slotLabel: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingInfo: (state, action: PayloadAction<SetBookingInfoPayload>) => {
      state.date = action.payload.date;
      state.userId = action.payload.userId;
      state.roomId = action.payload.roomId;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.slotValue = action.payload.slots;
      state.slotLabel = action.payload.slotLabel;
    },
  },
});

export const { setBookingInfo } = bookingSlice.actions;

export default bookingSlice.reducer;
