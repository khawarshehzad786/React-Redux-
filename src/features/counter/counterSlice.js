import {createSlice } from "@reduxjs/toolkit";
const initialState = { value : 3}
export const showSlice = createSlice ({
    name:"show",
    initialState,
    reducers:{    
        showData:(state)=>{
            state.value = state.value;
        },
        increment:(state)=>{
            state.value = state.value + 1;
        }        
     }
});
export const {showData,increment} = showSlice.actions; 
export default showSlice.reducer;