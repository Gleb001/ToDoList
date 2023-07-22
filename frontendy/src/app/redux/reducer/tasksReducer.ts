// imports =================================================== //
// redux-toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// types
import { TaskType } from "@shared/types/tasks";

// types ===================================================== //
type initialStateType = TaskType[]

// constants ================================================= //
const initialState: initialStateType = [];

// main ====================================================== //
let tasksReducer = createSlice({
    name: "taks",
    initialState,
    reducers: {
        add(state, action: PayloadAction<TaskType[]>) {
            state.push(...action.payload);
        },
        remove: (state, action: PayloadAction<TaskType["id"]>) => (
            state.filter(task => task.id !== action.payload)
        ),
        set(state, action: PayloadAction<{id: TaskType["id"], value: { name: string, }}>) {
            state.forEach((task, index, tasks) => {
                if (task.id === action.payload.id) {
                    tasks[index] = {
                        ...task,
                        ...action.payload.value
                    };
                }
            });
        }
    }
});

// // export ==================================================== //
export { tasksReducer };
export let { add, remove, set } = tasksReducer.actions;
export default tasksReducer.reducer;