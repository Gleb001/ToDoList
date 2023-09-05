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
type patchActiveTaskAPIType = AsyncThunkPayloadCreator<
    any,
    DataTask
>
type deleteActiveTaskAPIType = AsyncThunkPayloadCreator<
    any,
    Task["id"]
>
type getActiveTaskAPIType = AsyncThunkPayloadCreator<
    any,
    Task["id"]
>

// main ===================================================== //
export const getActiveTaskAPI: getActiveTaskAPIType = async (id, thunkAPI) => (
    await checkAPI(
        () => withAPI(PATH_TO_TASKS + "/" + id),
        thunkAPI
    )
);
export const deleteActiveTaskAPI: deleteActiveTaskAPIType = async (id, thunkAPI) => (
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
export const patchActiveTaskAPI: patchActiveTaskAPIType = async (data, thunkAPI) => {

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