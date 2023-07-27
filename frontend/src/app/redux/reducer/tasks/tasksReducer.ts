// imports =================================================== //
// redux-toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
import { TaskType } from "@shared/types/tasks";
import { deleteTask, fetchTasks, patchTask, postTask, patchTasks } from "./actionCreators";

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
    name: "tasks",
    initialState,
    reducers: {},
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
            // POST tasks
            .addCase(postTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
                state.status = "succeeded";
                state.data.push(action.payload);
            })
            // DELETE tasks
            .addCase(deleteTask.fulfilled, (state, action: PayloadAction<{index: number}>) => {
                state.status = "succeeded";
                state.data = state.data.filter(
                    (_, index) => index !== action.payload.index
                );
            })
            // PATCH task
            .addCase(patchTask.fulfilled, (state, action: PayloadAction<{ index: number, parameters: TaskType & {id: never} }>) => {
                let {index, parameters} = action.payload;
                state.data[index] = Object.assign(state.data[index], parameters);
            })
            // PATCH tasks
            .addCase(patchTasks.fulfilled, (state, action: PayloadAction<{ old_index: number, new_index: number }>) => {
                let { old_index, new_index } = action.payload;
                let item = state.data.splice(old_index, 1)[0];
                if (state.data.length === new_index) {
                    state.data.push(item);
                } else {
                    state.data.splice(new_index, 0, item);
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
export { fetchTasks, postTask, deleteTask, patchTask };
export default tasksReducer.reducer;