// import
// react
import React from 'react';
// api
import ButtonCompleteTaskType from "./types";
// redux
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
// internal
import "./ui/index.css";
import { patchTask } from '@app/redux/reducer/tasks/actionCreators';

// main
export const ButtonCompleteTask: ButtonCompleteTaskType = ({
    isComplete, isPriority, indexTask
}) => {

    let dispatch = useAppDispatch();

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch(patchTask({
            index: indexTask,
            parameters: { isComplete: !isComplete }
        }));
    }

    return (
        <button
            className={
                " button_complete_task " +
                (isPriority ? " button_is_priority " : " ") +
                (isComplete ? " button_is_complete " : " ")
            }
            onClick={handleClick}
        >{
                isComplete ? "✓" : ""
            }</button>
    );

};
