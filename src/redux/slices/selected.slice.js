import { createSlice } from "@reduxjs/toolkit";

const selectedUserSlice = createSlice({
    name:'selected',
    initialState:{
        id:null
    },
    reducers:{
        selectUser:(state,action)=>{
            state.id = action.payload;
        }
    }
})

export const {selectUser} = selectedUserSlice.actions;
export default selectedUserSlice.reducer;