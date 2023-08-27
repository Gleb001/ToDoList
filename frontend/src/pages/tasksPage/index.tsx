// import  ================================================ //
// react -------------------------------------------------- //
import React from "react";
// components --------------------------------------------- //
import { TaskManager } from "@widgets/task/Manager";
// redux -------------------------------------------------- //
import type { TasksPage as TasksPageType } from "./types";

// main =================================================== //
export const TasksPage: TasksPageType = ({ }) => {

    return (
        <TaskManager />
    );
    
}