// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// internal -------------------------------------------------- //
import {
    userReducer,
    taskReducer
} from "./reducer";

// main ====================================================== //
export const store = configureStore({
    reducer: {
        user: userReducer,
        task: taskReducer
    }
});