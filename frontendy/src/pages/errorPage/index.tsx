// imports
import { useRouteError } from "react-router-dom"
import React from "react";

// main
let ErrorPage = () => {

    let error = useRouteError() as { statusText: string, message: string };

    return (
        <>
            <h1>Oops!</h1>
            <p></p>
            <p>{
                error.message ||
                error.statusText
            }</p>
        </>
    );

};

// export
export default ErrorPage;