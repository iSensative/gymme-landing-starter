import { createSlice } from "@reduxjs/toolkit";

export interface navMobileState {
  navMobile: boolean;
}

const initialState: navMobileState = { navMobile: false };

export const sliceNavMobile = createSlice({
  name: "sliceNavMobile",
  initialState,

  reducers: {
    activeNavMobile: (state) => {
      state.navMobile = !state.navMobile;
    },

    changeNavMobileFalse: (state) => {
      state.navMobile = false;
    },
  },
});

export const { activeNavMobile, changeNavMobileFalse } = sliceNavMobile.actions;
export default sliceNavMobile.reducer;
