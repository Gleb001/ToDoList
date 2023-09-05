// import =================================================== //
//redux ----------------------------------------------------- //
import type { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
// libs ----------------------------------------------------- //
import { withAPI } from "@shared/libs/withAPI";
import { checkAPI } from "@app/redux/helpers/checkApi";
// types ---------------------------------------------------- //
import type { User } from "@shared/types/user";

// constants ================================================ //
const PATH_TO_USER = "http://localhost:5000/api/user";

// types ==================================================== //
type getUserAPIType = AsyncThunkPayloadCreator<any>
type patchUserAPIType = AsyncThunkPayloadCreator<any, User>

// main ===================================================== //
export const getUserAPI: getUserAPIType = async (_, thunkAPI) => (
    await checkAPI(
        () => withAPI(PATH_TO_USER),
        thunkAPI
    )
);
export const patchUserAPI: patchUserAPIType = async (data, thunkAPI) => (
    await checkAPI(
        () => (
            withAPI(
                PATH_TO_USER,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data, null, 2)
                }
            )
        ),
        thunkAPI
    )
);