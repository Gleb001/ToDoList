// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { patchTask } from '@app/redux/reducer/tasks/actionCreators';
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { ButtonRemoveTask as ButtonCompleteTaskType } from "./types";

// main ===================================================== //
export const ButtonCompleteTask: ButtonCompleteTaskType = ({
    isPriority,
    isComplete,
    taskId
}) => {

    const dispatch = useAppDispatch();

    function handleClick() {
        dispatch(
            patchTask({
                id: taskId!,
                isComplete: !isComplete
            })
        );
    }
    function getClassName() {
        return (
            "button-complete-task" + " " +
            (isPriority ? "button-priority " : " ") + " " +
            (isComplete ? "button-complete " : " ")
        );
    }

    return (
        <button
            className={getClassName()}
            onClick={handleClick}
        />
    );

};