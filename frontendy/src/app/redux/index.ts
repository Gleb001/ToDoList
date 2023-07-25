// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
// reducers -------------------------------------------------- //
import tasksReducer from "./reducer/tasksReducer";

// main ====================================================== //
let store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     immutableCheck:    { warnAfter: 128 },
    //     serializableCheck: { warnAfter: 128 },
    // })
});

// export ==================================================== //
export default store;