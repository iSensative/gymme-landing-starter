import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    navMobile:null
}


export const navMobileSlice = createSlice({
    name:'sliceNavMobile',
    initialState,

    reducers:{

        changeNavMobileTrue: (state,action) => {
            state.navMobile = true

        },

        changeNavMobileFalse: (state,action) => {
            state.navMobile = false

        },
    }
})

export const{changeNavMobileTrue,changeNavMobileFalse} = navMobileSlice.actions
export default navMobileSlice.reducer