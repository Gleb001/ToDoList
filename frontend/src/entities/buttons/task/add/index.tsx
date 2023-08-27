// import =================================================== //
// react ---------------------------------------------------- //
import React from "react"
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { postTask } from "@app/redux/reducer/tasks";
import { set as setActiveTask } from "@app/redux/reducer/activeTask";
// libs ----------------------------------------------------- //
import uniqueId from "@shared/libs/uniqueId";
// components ----------------------------------------------- //
import { Button } from "@shared/components/button";
// internal ------------------------------------------------- //
import type { ButtonAddTaskType } from "./types";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { CreateTask } from "./helper/createTask";

// main ===================================================== //
export const ButtonAddTask: ButtonAddTaskType = ({ }) => {

    let dispatch = useAppDispatch();

    function handleClick() {
        let new_task = CreateTask();
        dispatch(
            postTask(new_task)
        );
        dispatch(
            setActiveTask(new_task)
        );
    }

    return (
        <Button
            className="button-add-task"
            onClick={handleClick}
        >
            Добавить
        </Button>
    );

}