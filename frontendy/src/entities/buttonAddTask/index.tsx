// import ================================================= //
// react
import React, { useState } from "react"
// helpers
import getStyle from "./helpers";
// libs
import uniqueId from "@shared/libs/uniqueId";
// hooks
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { add as addTask } from "@app/redux/reducer/tasksReducer";
// internal
import "./ui/index.css";
import ButtonAddTaskType from "./types";
import { addTaskRequest } from "./api/addTask";

// main =================================================== //
const ButtonAddTask: ButtonAddTaskType = ({ }) => {

    let dispatch = useAppDispatch();

    function handleClick() {
        let new_task = {
            id: uniqueId(),
            name: "New task..."
        };
        dispatch(addTask([new_task]));
        addTaskRequest(new_task);
    }

    return (
        <button
            className="button_add_task"
            onClick={handleClick}
        >
            Add
        </button>
    );

}

// export ================================================== //
export default ButtonAddTask;

