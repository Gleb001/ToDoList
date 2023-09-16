// import =================================================== //
//redux ----------------------------------------------------- //
import type { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
// libs ----------------------------------------------------- //
import { withAPI } from "@shared/libs/withAPI";
import { checkAPI } from "@app/redux/helpers/checkApi";
// types ---------------------------------------------------- //
import type { Task, DataTask } from "@shared/types/tasks";

// constants ================================================ //
const PATH_TO_TASKS = "http://localhost:5000/api/tasks";

// types ==================================================== //
type patchTaskAPIType = AsyncThunkPayloadCreator<
    any,
    DataTask
>
type deleteTaskAPIType = AsyncThunkPayloadCreator<
    any,
    Task["id"]
>

// main ===================================================== //
export const deleteTaskAPI: deleteTaskAPIType = async (id, thunkAPI) => (
    await checkAPI(
        () => (
            withAPI(
                PATH_TO_TASKS + "/" + id,
                { method: "DELETE" }
            )
        ),
        thunkAPI
    )
)
export const patchTaskAPI: patchTaskAPIType = async (data, thunkAPI) => {

    let dataBody = {};
    for (let key in data) {
        if (key !== "id") {
            dataBody[key] = data[key];
        }
    }

    return (
        await checkAPI(
            () => (
                withAPI(
                    PATH_TO_TASKS + "/" + data.id,
                    {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(dataBody, null, 2)
                    }
                )
            ),
            thunkAPI
        )
    );

};