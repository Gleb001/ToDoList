import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskType } from "@shared/types/tasks";


// ABOUT TASKS ---------------------------------------------- //
// POST
export const postTasks = createAsyncThunk(
    "tasks/postTasks",
    async (data: TaskType) => {
        let response = await fetch(
            "http://localhost:5000/tasks",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }
        );
        return response.json();
    }
);
// GET
export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        let response = await fetch("http://localhost:5000/tasks");
        return response.json();
    }
);
// DELETE
export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (id: string) => {
        let response = await fetch(
            "http://localhost:5000/tasks",
            {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            }
        );
        return response.json();
    }
);
// PATCH
export const patchTasks = createAsyncThunk(
    "tasks/patchTasks",
    async (data: { old_index: number, new_index: number }) => {
        let response = await fetch(
            "http://localhost:5000/tasks",
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }
        );
        return response.json();
    }
);

// ABOUT TASK ----------------------------------------------- //
// PATCH
export const patchTask = createAsyncThunk(
    "tasks/patchTask",
    async (data: TaskType) => {
        let response = await fetch(
            "http://localhost:5000/task",
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }
        );
        return response.json();
    }
);