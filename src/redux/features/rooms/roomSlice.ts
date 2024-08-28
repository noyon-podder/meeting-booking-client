import { createSlice } from "@reduxjs/toolkit";

type TRoomSliceState = {
  searchTerm: string;
  sort?: string;
  capacity: number;
  minPrice: number;
  maxPrice: number;
};

const initialState: TRoomSliceState = {
  searchTerm: "",
  sort: "",
  capacity: 0,
  minPrice: 10,
  maxPrice: 1000,
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
  },
});

export const { setSearchTerm, setSort, setCapacity, setMinPrice, setMaxPrice } =
  roomSlice.actions;

export default roomSlice.reducer;
