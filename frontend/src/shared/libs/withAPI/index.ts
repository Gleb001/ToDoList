// imports =================================================== //
import withAPIType from "./types";

// main ====================================================== //
export const withAPI: withAPIType = async (url, action, options) => (
    await fetch(url, options)
        .then(response => {
            if (!action) return response;

            let [type, callback] = action;
            let typeValue = response.ok ? "success" : "error";
            if (typeValue === type) callback();
        })
);