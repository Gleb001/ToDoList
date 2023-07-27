// imports
import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ProviderType from "./types";

// main
let Provider: ProviderType = ({ root, error }) => {

    let router  = createBrowserRouter([
        {
            path: "/*",
            element: root(),
            errorElement: error(),
        }
    ], {basename: "/"});

    return (
        <RouterProvider router={router} />
    );
    
}

// export
export default Provider;