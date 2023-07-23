// import ================================================= //
// react
import React, { useState } from "react"
// libs
import uniqueId from "@shared/libs/uniqueId";
// hooks
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
// internal
import "./ui/index.css";
import ButtonAddTaskType from "./types";
import { postTasks } from "@app/redux/reducer/actionCreators";

// main =================================================== //
const ButtonAddTask: ButtonAddTaskType = ({ }) => {

    let dispatch = useAppDispatch();

    function handleClick() {
        dispatch(
            postTasks({
                id: uniqueId(),
                name: "New task..."
            })
        ).then(result => {
            console.log(result);
        });
    }

    return (
        <button
            className="button_add_task"
            onClick={handleClick}
        >
            Add
        </button>
    );

};

// export ================================================== //
export default ButtonAddTask;

