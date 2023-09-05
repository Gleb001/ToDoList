// import =================================================== //
//redux ----------------------------------------------------- //
import type { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
// libs ----------------------------------------------------- //
import { withAPI } from "@shared/libs/withAPI";
import { checkAPI } from "@app/redux/helpers/checkApi";
// types ---------------------------------------------------- //
import type { Task } from "@shared/types/tasks";

// constants ================================================ //
const PATH_TO_TASKS = "http://localhost:5000/api/tasks";

// types ==================================================== //
type getListTasksAPIType = AsyncThunkPayloadCreator<any>
type postListTaskAPIType = AsyncThunkPayloadCreator<any, Task>
type putListTasksAPIType = AsyncThunkPayloadCreator<any, { old_index: number, new_index: number }>

// main ===================================================== //
export const getListTasksAPI: getListTasksAPIType = async (_, thunkAPI) => (
    await checkAPI(
        () => withAPI(
            PATH_TO_TASKS,
            {
                headers: { "Cache-Control": "no-chache" }
            }
        ),
        thunkAPI
    )
);
export const putListTasksAPI: putListTasksAPIType = async (data, thunkAPI) => (
    await checkAPI(
        () => (
            withAPI(
                PATH_TO_TASKS,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data, null, 2)
                }
            )
        ),
        thunkAPI
    )
);
export const postListTasksAPI: postListTaskAPIType = async (data, thunkAPI) => (
    await checkAPI(
        () => (
            withAPI(
                PATH_TO_TASKS,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data, null, 2)
                }
            )
        ),
        thunkAPI
    )
);