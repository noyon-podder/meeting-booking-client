import { createSlice } from "@reduxjs/toolkit";

type TRoomSliceState = {
  searchTerm: string;
  sort?: string;
  capacity: number;
  minPrice: number;
  maxPrice: number;
  length: string;
};

const initialState: TRoomSliceState = {
  searchTerm: "",
  sort: "",
  capacity: 0,
  minPrice: 10,
  maxPrice: 1000,
  length: "",
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setCapacity: (state, action) => {
      state.capacity = action.payload;
    },

    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setLength: (state, action) => {
      state.length = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setSort,
  setCapacity,
  setMinPrice,
  setMaxPrice,
  setLength,
} = roomSlice.actions;

export default roomSlice.reducer;
