import { createSlice } from "@reduxjs/toolkit";
// import { Action } from "history";

export const globalSlice=createSlice({
    name:"global",
    initialState:{
        value:0,
    },
    reducers:{
        navWidth:(state,action)=>{
            state.value=action.payload
            console.log(action.payload)
        }
    }
})


export const {navWidth}=globalSlice.actions
export default globalSlice.reducer