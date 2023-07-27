// imports =================================================== //
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// main ====================================================== //
let activeTaskSlice = createSlice({
    name: "active-task",
    initialState: -1,
    reducers: {
        set: (state, action: PayloadAction<number>) => action.payload
    },
});

// export ==================================================== //
export { activeTaskSlice };
export let { set } = activeTaskSlice.actions;
export default activeTaskSlice.reducer;