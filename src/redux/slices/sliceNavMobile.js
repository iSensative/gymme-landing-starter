import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navMobile: false,
};

export const sliceNavMobile = createSlice({
  name: "sliceNavMobile",
  initialState,

  reducers: {
    changeNavMobileTrue: (state) => {
      state.navMobile = true;
    },

    changeNavMobileFalse: (state) => {
      state.navMobile = false;
    },
  },
});

export const { changeNavMobileTrue, changeNavMobileFalse } =
  sliceNavMobile.actions;
export default sliceNavMobile.reducer;
