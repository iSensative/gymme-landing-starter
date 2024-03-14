import { configureStore } from "@reduxjs/toolkit";
import navMobileReducer from './slice'



export const store = configureStore({
    reducer:{
        navMobile:navMobileReducer
    }
})
