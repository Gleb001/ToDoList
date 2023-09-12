// import =================================================== //
// react ---------------------------------------------------- //
import { useRouteError } from "react-router-dom"
// inherit -------------------------------------------------- //
import type {
    RouterError,
    ErrorPage as ErrorPageType
} from "./types";

// main ===================================================== //
export const ErrorPage: ErrorPageType = () => {

    let { message, statusText } = useRouteError() as RouterError;

    return (
        <>
            <h1>Oops!</h1>
            <span>{ message || statusText }</span>
        </>
    );

};