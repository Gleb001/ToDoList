// import =================================================== //
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getUserAPI,
    postUserAPI
} from "./api";

// main ===================================================== //
export const getUser  = createAsyncThunk("user/getUser",  getUserAPI );
export const postUser = createAsyncThunk("user/postUser", postUserAPI);