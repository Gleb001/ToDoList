// import
import React from "react";
import Routing from "../pages";
import ErrorPage from "../pages/errorPage";
import Provider from "./provider";
import "../shared/ui/index.css";

// main
let App = () => Provider({
    root: () => <Routing />,
    error: () => <ErrorPage />,
});

// export
export default App;