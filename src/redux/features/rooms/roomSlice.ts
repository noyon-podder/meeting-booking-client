import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = roomSlice.actions;

export default roomSlice.reducer;
