// import =================================================== //
// redux ---------------------------------------------------- //
import { createAsyncThunk } from "@reduxjs/toolkit";
// internal ------------------------------------------------- //
import { getUserAPI, patchUserAPI } from "./api";

// main ===================================================== //
export const getUser  = createAsyncThunk("user/getUser",  getUserAPI    );
export const patchUser = createAsyncThunk("user/patchUser", patchUserAPI);