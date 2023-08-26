// import =================================================== //
//redux ----------------------------------------------------- //
import type { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
// libs ----------------------------------------------------- //
import { withAPI } from "@shared/libs/withAPI";
// types ---------------------------------------------------- //
import type { User } from "@shared/types/user";

// constants ================================================ //
const PATH_TO_USER = "http://localhost:5000/api/user";

// types ==================================================== //
type getUserAPIType = AsyncThunkPayloadCreator<any>
type postUserAPIType = AsyncThunkPayloadCreator<any, User>

// main ===================================================== //
export const getUserAPI: getUserAPIType = async (_, thunkAPI) => (
    await withAPI(PATH_TO_USER)
);
export const postUserAPI: postUserAPIType = async (data, thunkAPI) => (
    await withAPI(
        PATH_TO_USER,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data, null, 2)
        }
    )
);