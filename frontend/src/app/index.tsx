// import ================================================= //
// react -------------------------------------------------- //
import React from "react";
// pages -------------------------------------------------- //
import { Routing } from "../pages";
// provider ----------------------------------------------- //
import { Provider } from "./provider";
// shared ------------------------------------------------- //
import "../shared/ui/index.css";

// main =================================================== //
export const App = () => Provider(Routing);