// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// reducers -------------------------------------------------- //
import tasksReducer from "./reducer/tasksReducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

// main ====================================================== //
let store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck:    { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
    })
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     immutableCheck: { warnAfter: 128 },
    //     serializableCheck: { warnAfter: 128 },
    //   })
});

// export ==================================================== //
export default store;