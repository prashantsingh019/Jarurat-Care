import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
    name:'querySlice',
    initialState:{
       query:""
    },
    reducers:{
        sendQuery:(state,action)=>{
            state.query = action.payload;
        }
    }
});

export const {sendQuery} = querySlice.actions;
export default querySlice.reducer;