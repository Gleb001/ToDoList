// import =================================================== //
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getTasksAPI,
    postTaskAPI,
    patchTaskAPI,
    deleteTaskAPI,
    putTasksAPI,
} from "./api";

// main ===================================================== //
export const getTasks   = createAsyncThunk("tasks/getTask",    getTasksAPI  );
export const putTasks   = createAsyncThunk("tasks/putTasks",   putTasksAPI  );
export const postTask   = createAsyncThunk("tasks/postTask",   postTaskAPI  );
export const patchTask  = createAsyncThunk("tasks/patchTask",  patchTaskAPI );
export const deleteTask = createAsyncThunk("tasks/deleteTask", deleteTaskAPI);