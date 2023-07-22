// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// reducers -------------------------------------------------- //
import tasksReducer from "./reducer/tasksReducer";

// main ====================================================== //
let store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

// export ==================================================== //
export default store;