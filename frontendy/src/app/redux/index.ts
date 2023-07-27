// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// reducers -------------------------------------------------- //
import tasksReducer from "./reducer/tasks/tasksReducer";
import activeTaskReducer from "./reducer/activeTaskReducer";

// main ====================================================== //
let store = configureStore({
    reducer: {
        tasks: tasksReducer,
        active_task: activeTaskReducer,
    },
});

// export ==================================================== //
export default store;