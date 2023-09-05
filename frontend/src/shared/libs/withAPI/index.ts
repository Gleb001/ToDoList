// imports =================================================== //
import type { withAPIType } from "./types";

// main ====================================================== //
export const withAPI: withAPIType = async (url, options) => {
    let response = await fetch(url, options);
    if (response.status < 200 || response.status >= 300) {
        return {
            error: `${response.status} : ${response.statusText}`
        };
    } else {
        return response.json();
    }
};