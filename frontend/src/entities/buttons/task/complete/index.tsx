// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// action creator ------------------------------------------- //
import { patchTask } from '@app/redux/reducer/tasks/actionCreators';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { ButtonRemoveTask as ButtonCompleteTaskType } from "./types";

// main ===================================================== //
export const ButtonCompleteTask: ButtonCompleteTaskType = ({
    isComplete,
    isPriority,
    taskId
}) => {

    let dispatch = useAppDispatch();

    function handleClick() {
        dispatch(
            patchTask({
                id: taskId,
                isComplete: !isComplete
            })
        );
    }
    function getClassName() {
        return (
            "button-complete-task " +
            (isPriority ? " button-priority " : " ") +
            (isComplete ? " button-complete " : " ")
        );
    }

    return (
        <button
            className={getClassName()}
            onClick={handleClick}
        ></button>
    );

};