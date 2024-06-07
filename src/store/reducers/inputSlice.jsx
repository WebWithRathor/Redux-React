import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Name : "anjaan"
}

const inputSlice = createSlice({
    name:"Count",
    initialState,
    reducers:{
        InputName:(state,action)=>{
            state.Name = action.payload;
        }
    }
})

export default inputSlice.reducer;
export const {InputName} = inputSlice.actions;