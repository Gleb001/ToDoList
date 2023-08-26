// imports =================================================== //
import type { withAPIType } from "./types";

// main ====================================================== //
export const withAPI: withAPIType = async (url, options) => {
    let response = await fetch(url, options);
    if (response.status < 200 || response.status >= 300) {
        console.log(`${response.status} : ${response.statusText}`);
        return `${response.status} : ${response.statusText}`;
    } else {
        return response.json();
    }
};