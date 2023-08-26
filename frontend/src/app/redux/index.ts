// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// reducers -------------------------------------------------- //
import {
    userReducer,
    tasksReducer,
    activeTaskReducer,
} from "./reducer";

// main ====================================================== //
export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer,
        active_task: activeTaskReducer,
    },
});