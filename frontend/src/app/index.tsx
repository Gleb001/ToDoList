// import =================================================== //
// pages ---------------------------------------------------- //
import { Routing } from "../pages";
// internal ------------------------------------------------- //
import "../shared/ui/index.css";
import { Provider } from "./provider";

// main ===================================================== //
export const App = () => Provider(Routing);