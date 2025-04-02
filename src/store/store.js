import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {    // Add the reducer here
    auth : authSlice,
    },
    });

    export default store;
