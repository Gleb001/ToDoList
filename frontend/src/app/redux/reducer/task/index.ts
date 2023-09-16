// imports =================================================== //
// redux ----------------------------------------------------- //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AnyAction } from "@reduxjs/toolkit";
// types ----------------------------------------------------- //
import type { Task } from "@shared/types/tasks";
// internal -------------------------------------------------- //
import {
    // list tasks
    getListTasks,
    putListTasks,
    postListTasks,
    // active task
    patchActiveTask,
    deleteActiveTask,
} from "./actionCreators";
import { initialState } from "./initialState";

// main ====================================================== //
let TasksReducer = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // list tasks methods --------------------------- //
            // GET
            .addCase(getListTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getListTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            // POST
            .addCase(postListTasks.fulfilled, (state, action: PayloadAction<Task>) => {
                state.status = "succeeded";
                state.data.push(action.payload);
            })
            // PUT
            .addCase(putListTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            // active task methods -------------------------- //
            // PATCH
            .addCase(patchActiveTask.fulfilled, (state, action: PayloadAction<{ index: number, data: Task }>) => {
                state.data[action.payload.index] = action.payload.data;
            })
            // DELETE
            .addCase(deleteActiveTask.fulfilled, (state, action: PayloadAction<number>) => {
                state.data.splice(action.payload, 1);
            })
            // failed event...
            .addMatcher(
                (action: AnyAction) => action.type.endsWith("/rejected"),
                (state, action: PayloadAction<{ error: { message: string } }>) => {
                    state.status = "failed";
                    state.error = action.payload.error.message;
                }
            );
    }
});

// export ==================================================== //
export { TasksReducer };
export {
    // list tasks
    getListTasks,
    putListTasks,
    postListTasks,

    // active task
    patchActiveTask,
    deleteActiveTask,
};
export default TasksReducer.reducer;