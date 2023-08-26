// imports =================================================== //
// redux-toolkit --------------------------------------------- //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// action creators ------------------------------------------- //
import {
    getUser,
    postUser
} from "./actionCreators";
// initial state --------------------------------------------- //
import { initialState } from "./initialState";
// types ----------------------------------------------------- //
import type { User } from "@shared/types/user";

// main ====================================================== //
let tasksReducer = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // GET
            .addCase(getUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            // POST
            .addCase(postUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = "succeeded";
                for (const key in action.payload) {
                    state.data[key] = action.payload[key];
                }
            })
            // failed event...
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, { error }) => {
                    state.status = "failed";
                    state.error = error.message as string;
                }
            )
    }
});

// export ==================================================== //
export { tasksReducer };
export { getUser, postUser };
export default tasksReducer.reducer;