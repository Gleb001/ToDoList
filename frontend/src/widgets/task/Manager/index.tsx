// import ================================================= //
// react ================================================== //
import React from "react";
import { NavLink } from "react-router-dom";
// components --------------------------------------------- //
import { Button } from "@shared/components/button";
import { ButtonAddTask } from '@entities/buttons/task/add';
import { TaskContainer } from '@widgets/task/Container';
// internal ----------------------------------------------- //
import TaskManagerType from "./types";
import "./ui/index.css";

// main =================================================== //
export const TaskManager: TaskManagerType = () => (
    <div id='task-manager'>
        <TaskContainer />
        <nav className="button-container-task-manager">
            <ButtonAddTask />
            <NavLink to="/settings">
                <Button>Настройки</Button>
            </NavLink>
        </nav>
    </ div>
);