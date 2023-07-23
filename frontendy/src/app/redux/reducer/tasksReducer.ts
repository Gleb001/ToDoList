// imports =================================================== //
// redux-toolkit
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
import { TaskType } from "@shared/types/tasks";
import { deleteTask, fetchTasks, patchTask, postTasks } from "./actionCreators";

// types ===================================================== //
interface initialStateType {
    data: TaskType[],
    status: 'pending' | 'loading' | 'succeeded' | 'failed',
    error: string,
}

// constants ================================================= //
const initialState: initialStateType = {
    data: [],
    status: 'pending',
    error: "",
};

// main ====================================================== //
let tasksReducer = createSlice({
    name: "taks",
    initialState,
    reducers: { },
    extraReducers(builder) {
        builder
            // GET tasks
            .addCase(fetchTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<TaskType[]>) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, { error }) => {
                state.status = "failed";
                state.error = error.message as string;
            })
            // POST tasks
            .addCase(postTasks.fulfilled, (state, action: PayloadAction<TaskType>) => {
                state.status = "succeeded";
                state.data.push(action.payload);
            })
            .addCase(postTasks.rejected, (state, { error }) => {
                state.status = "failed";
                state.error = error.message as string;
            })
            // DELETE task
            .addCase(deleteTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
                state.status = "succeeded";
                state.data = state.data.filter(
                    task => task.id !== action.payload.id
                );
            })
            .addCase(deleteTask.rejected, (state, { error }) => {
                state.status = "failed";
                state.error = error.message as string;
            })
            // PATCH task
            .addCase(patchTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
                state.data.forEach((task, index, tasks) => {
                    if (task.id === action.payload.id) {
                        tasks[index] = Object.assign(
                            task, 
                            action.payload
                        );
                    }
                });
            })
            .addCase(patchTask.rejected, (state, {error}) => {
                state.status = "failed";
                state.error = error.message as string;
            })
    }
});

// export ==================================================== //
export { tasksReducer };
// export let { add, remove, set } = tasksReducer.actions;
export { fetchTasks, postTasks, deleteTask, patchTask };
export default tasksReducer.reducer;