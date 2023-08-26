import type { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";

// types ==================================================== //
type checkAPIType = AsyncThunkPayloadCreator<any, () => Promise<any>>;

// main ===================================================== //
export const checkAPI: checkAPIType = async (api, thunkAPI) => {
    let response = await api();
    return (
        typeof response === "string" ?
            thunkAPI.rejectWithValue(response) :
            response
    );
};