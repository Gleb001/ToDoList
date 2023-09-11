// import =================================================== //
import type { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";

// types ==================================================== //
type checkAPIType = AsyncThunkPayloadCreator<any, () => Promise<any>>;

// main ===================================================== //
export const checkAPI: checkAPIType = async (api, thunkAPI) => {
    try {
        return await api();
    } catch (error) {
        // @ts-ignore
        return thunkAPI.rejectWithValue(error.message);
    }
};