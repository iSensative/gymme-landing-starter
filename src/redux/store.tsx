import { configureStore } from "@reduxjs/toolkit";
import sliceNavMobile from "./slices/sliceNavMobile";

export const store = configureStore({
  reducer: {
    navMobile: sliceNavMobile,
  },
});
