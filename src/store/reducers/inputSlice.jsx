import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Name : "No Name"
}

const inputSlice = createSlice({
    name:"Count",
    initialState,
    reducers:{
        change:(state,action)=>{
            state.Name = action.payload;
        }
    }
})

export default inputSlice.reducer;
export const {change} = inputSlice.actions;