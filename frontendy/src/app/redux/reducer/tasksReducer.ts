// imports =================================================== //
// redux-toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
import { TaskType } from "@shared/types/tasks";
import { deleteTask, fetchTasks, patchTask, postTasks, patchTasks } from "./actionCreators";

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
            // POST tasks
            .addCase(postTasks.fulfilled, (state, action: PayloadAction<TaskType>) => {
                state.status = "succeeded";
                state.data.push(action.payload);
            })
            // DELETE tasks
            .addCase(deleteTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
                state.status = "succeeded";
                state.data = state.data.filter(
                    task => task.id !== action.payload.id
                );
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
            // PATCH tasks
            .addCase(patchTasks.fulfilled, (state, action: PayloadAction<{ old_index: number, new_index: number }>) => {
                let { old_index, new_index } = action.payload;
                let item = state.data[old_index];
                state.data.splice(old_index, 1);
                state.data.splice(new_index, 0, item);
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
export { fetchTasks, postTasks, deleteTask, patchTask };
export default tasksReducer.reducer;



function changeIndex(array: [], old_index: number, new_index: number) {
    if (array.length <= old_index || array.length <= new_index) {
        return array;
    }

    let item = array[old_index];
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (index === new_index) {
            result.push(item);
        }
        if (index !== old_index) {
            result.push(array[index]);
        }
    }
    return result;
}