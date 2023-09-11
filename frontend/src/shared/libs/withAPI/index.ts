// imports =================================================== //
import type { withAPIType } from "./types";

// main ====================================================== //
export const withAPI: withAPIType = async (url, options) => {
    const response = await fetch(url, options);
    const hasError = (
        response.status < 200  ||
        response.status >= 300
    );
    return (
        hasError ? 
            `${response.status}: ${response.statusText}` :
            response.json()
    );
};