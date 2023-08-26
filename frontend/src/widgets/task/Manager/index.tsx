// import ================================================= //
// react ================================================== //
import React from "react";
// components --------------------------------------------- //
import { ButtonAddTask } from '@entities/buttons/task/add';
import { ButtonChangeTheme } from '@entities/buttons/ChageTheme';
import { TaskContainer } from '@widgets/task/Container';
// internal ----------------------------------------------- //
import TaskManagerType from "./types";
import "./ui/index.css";

// main =================================================== //
export const TaskManager: TaskManagerType = () => (
    <div id='task-manager'>
        <TaskContainer />
        <div className="button-container">
            <ButtonAddTask />
            <ButtonChangeTheme />
        </div>
    </ div>
);