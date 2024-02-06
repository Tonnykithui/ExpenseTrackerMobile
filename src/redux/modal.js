import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    modalOpen: (state, action) => {
      console.log("STATE BEFORE", state);
      console.log("FIND A WAY!!", action.payload);
      state.isOpen = true;
      console.log("STATE", state);
    },
    modalClose: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { modalClose, modalOpen } = modalSlice.actions;

export default modalSlice.reducer;
