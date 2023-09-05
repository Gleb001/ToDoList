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
let TaskReducer = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setActiveTask: (state, action: PayloadAction<Task | {}>) => {
            state.active.data = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            // list tasks methods --------------------------- //
            // GET
            .addCase(getListTasks.pending, (state) => {
                state.list.status = "loading";
            })
            .addCase(getListTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.list.status = "succeeded";
                state.active.data = {};
                console.log(action.payload);
                state.list.data = action.payload;
            })
            // POST
            .addCase(postListTasks.fulfilled, (state, action: PayloadAction<Task>) => {
                state.list.status = "succeeded";
                state.list.data.push(action.payload);
            })
            // PUT
            .addCase(putListTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.list.status = "succeeded";
                state.list.data = action.payload;
            })
            // active task methods -------------------------- //
            // PATCH
            .addCase(patchActiveTask.fulfilled, (state, action: PayloadAction<{ index: number, data: Task }>) => {
                state.active.status = "succeeded";
                state.list.data[action.payload.index] = action.payload.data;
            })
            // DELETE
            .addCase(deleteActiveTask.fulfilled, (state, action: PayloadAction<number>) => {
                state.active.status = "succeeded";
                state.active.data = {};
                state.list.data.splice(action.payload, 1);
            })
            // failed event...
            .addMatcher(
                (action: AnyAction) => action.type.endsWith("/rejected"),
                (state, action: PayloadAction<{ error: { message: string } }>) => {
                    state.list.status = "failed";
                    state.active.status = "failed";
                    state.list.error = action.payload.error.message;
                    state.active.error = action.payload.error.message;
                }
            );
    }
});

// export ==================================================== //
export { TaskReducer };
let setActiveTask = TaskReducer.actions.setActiveTask;
export {
    // list tasks
    getListTasks,
    putListTasks,
    postListTasks,

    // active task
    patchActiveTask,
    deleteActiveTask,
    setActiveTask
};
export default TaskReducer.reducer;