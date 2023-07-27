// import ================================================= //
// react
import React from "react"
// libs
import uniqueId from "@shared/libs/uniqueId";
// hooks
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
// internal
import "./ui/index.css";
import ButtonAddTaskType from "./types";
import { postTask } from "@app/redux/reducer/tasks/tasksReducer";

// main =================================================== //
const ButtonAddTask: ButtonAddTaskType = ({ }) => {

    let dispatch = useAppDispatch();

    function handleClick() {
        dispatch(
            postTask({
                id: uniqueId(),
                title: "",
                description: "",
                isPriority: false,
                isComplete: false,
            })
        );
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

