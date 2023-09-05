// imports ================================================== //
// react ---------------------------------------------------- //
import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";
// internal ------------------------------------------------- //
import type { ProviderType } from "./types";

// main ===================================================== //
export const Provider: ProviderType = (component) => {

    const browserRouter = createBrowserRouter(
        createRoutesFromElements(
            component()
        )
    );

    return (
        <RouterProvider router={browserRouter} />
    );

};