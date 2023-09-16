// import =================================================== //
// redux ---------------------------------------------------- //
import { createAsyncThunk } from "@reduxjs/toolkit";
// internal ------------------------------------------------- //
import {
    patchTaskAPI,
    deleteTaskAPI,
} from "./api/taskAPI";
import {
    getListTasksAPI,
    postListTasksAPI,
    putListTasksAPI,
} from "./api/listTasksApi";

// main ===================================================== //
// task
export const patchActiveTask  = createAsyncThunk("task/patchActiveTask",  patchTaskAPI  );
export const deleteActiveTask = createAsyncThunk("task/deleteActiveTask", deleteTaskAPI );
// list tasks
export const getListTasks = createAsyncThunk("task/getListTasks",  getListTasksAPI   );
export const postListTasks = createAsyncThunk("task/postListTasks", postListTasksAPI );
export const putListTasks = createAsyncThunk("task/putListTasks",  putListTasksAPI   );