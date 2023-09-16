// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// internal -------------------------------------------------- //
import {
    userReducer,
    tasksReducer
} from "./reducer";

// main ====================================================== //
export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer
    }
});