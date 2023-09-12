// import =================================================== //
import type { FC } from "react";

// main ===================================================== //
interface RouterError {
    statusText: string,
    message: string
}
type ErrorPage = FC<{}>

// export =================================================== //
export type {
    ErrorPage,
    RouterError
};