// imports =================================================== //
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

// main ====================================================== //
let activeTaskSlice = createSlice({
    name: "index-active-task",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<typeof initialState>) => {
            if (Object.keys(action.payload).length > 1) {
                Object.assign(state, action.payload);
            } else {
                return {};
            }
        }
    },
});

// export ==================================================== //
export { activeTaskSlice };
export let { set } = activeTaskSlice.actions;
export default activeTaskSlice.reducer;