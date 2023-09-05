// imports =================================================== //
// redux-toolkit --------------------------------------------- //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types ----------------------------------------------------- //
import type { User } from "@shared/types/user";
// internal ------------------------------------------------- //
import { initialState } from "./initialState";
import { getUser, patchUser } from "./actionCreators";

// main ====================================================== //
let userReducer = createSlice({
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
            .addCase(patchUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            // failed event...
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action: PayloadAction<string>) => {
                    state.status = "failed";
                    state.error = action.payload;
                }
            )
    }
});

// export ==================================================== //
export { userReducer };
export { getUser, patchUser };
export default userReducer.reducer;