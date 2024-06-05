import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const CountSlice = createSlice({
    name:"Count",
    initialState,
    reducers:{
        increase:(state,action)=>{
            state.value = action.payload;
        }
    }
})

export default CountSlice.reducer;
export const {increase} = CountSlice.actions;