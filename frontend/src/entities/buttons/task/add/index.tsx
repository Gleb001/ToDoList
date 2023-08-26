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

// main ===================================================== //
export const ButtonAddTask: ButtonAddTaskType = ({ }) => {

    let dispatch = useAppDispatch();
    let position_new_task = useAppSelector(state => state.tasks.data.length);

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
        dispatch(
            setActiveTask({})
        );
    }

    return (
        <Button
            className="button-add-task"
            onClick={handleClick}
        >
            Add
        </Button>
    );

}