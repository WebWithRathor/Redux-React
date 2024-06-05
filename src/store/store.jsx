import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./reducers/CountSlice";
import inputSlice from "./reducers/inputSlice";

export const store = configureStore({
    reducer:{
        CountSlice:CountSlice,
        inputSlice:inputSlice,
    }
})