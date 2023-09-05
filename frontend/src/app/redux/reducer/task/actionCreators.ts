// import =================================================== //
// redux ---------------------------------------------------- //
import { createAsyncThunk } from "@reduxjs/toolkit";
// internal ------------------------------------------------- //
import {
    patchActiveTaskAPI,
    deleteActiveTaskAPI,
} from "./api/activeTaskApi";
import {
    getListTasksAPI,
    postListTasksAPI,
    putListTasksAPI,
} from "./api/listTasksApi";

// main ===================================================== //
// active task
export const patchActiveTask  = createAsyncThunk("task/patchActiveTask",  patchActiveTaskAPI  );
export const deleteActiveTask = createAsyncThunk("task/deleteActiveTask", deleteActiveTaskAPI );
// list tasks
export const getListTasks = createAsyncThunk("task/getListTasks",  getListTasksAPI   );
export const postListTasks = createAsyncThunk("task/postListTasks", postListTasksAPI );
export const putListTasks = createAsyncThunk("task/putListTasks",  putListTasksAPI   );