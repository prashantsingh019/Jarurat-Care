import { configureStore } from "@reduxjs/toolkit";
import  dataSlice  from "./slices/userData.slice.js";
import selectedUserSlice from "./slices/selected.slice.js";

export const store = configureStore({
  reducer:{
    patients:dataSlice,
    selected:selectedUserSlice
 }
});