// imports =================================================== //
// redux-toolkit --------------------------------------------- //
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// action creators ------------------------------------------- //
import {
    deleteTask,
    getTasks,
    postTask,
    patchTask,
    putTasks,
} from "./actionCreators";
// initial state --------------------------------------------- //
import { initialState } from "./initialState";
// types ----------------------------------------------------- //
import type { Task, DataTask } from "@shared/types/tasks";

// main ====================================================== //
let tasksReducer = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // GET
            .addCase(getTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            // POST
            .addCase(postTask.fulfilled, (state, action: PayloadAction<Task>) => {
                state.status = "succeeded";
                state.data.push(action.payload);
            })
            // DELETE
            .addCase(deleteTask.fulfilled, (state, action: PayloadAction<{ index: number }>) => {
                state.status = "succeeded";
                state.data = state.data.filter(
                    (_, index) => index !== action.payload.index
                );
            })
            // PATCH
            .addCase(patchTask.fulfilled, (state, action: PayloadAction<DataTask>) => {
                let changed_task = action.payload;
                state.data.forEach((task, index) => {
                    if (task.id === changed_task.id) {
                        state.data[index] = Object.assign(
                            state.data[index],
                            changed_task
                        );
                    }
                });
            })
            // PUT
            .addCase(putTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.data = action.payload;
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
export { getTasks, postTask, deleteTask, patchTask };
export default tasksReducer.reducer;