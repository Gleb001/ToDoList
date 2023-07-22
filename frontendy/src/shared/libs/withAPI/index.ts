// imports =================================================== //
import withAPIType from "./types";

// main ====================================================== //
export const withAPI: withAPIType = async (url, options) => (
    await fetch(url, options)
        .then(response => 
            response.ok ?
                response.json() :
                response
        )
        .catch(error => console.log(error))
);