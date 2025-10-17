import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name:"userData",
    initialState:[],
    reducers:{
        provideData:(state,action) => {
            return action.payload;
        }
    }
});

export const { provideData } = dataSlice.actions;
export default dataSlice.reducer;