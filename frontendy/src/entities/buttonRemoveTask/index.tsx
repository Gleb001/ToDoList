// import
// react
import React from 'react';
// api
import ButtonRemoveTaskType from "./types";
// redux
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
// internal
import "./ui/index.css";
import { deleteTask } from '@app/redux/reducer/tasksReducer';

// main
export const ButtonRemoveTask: ButtonRemoveTaskType = ({
    taskId
}) => {

    let dispatch = useAppDispatch();

    function handleClick() { dispatch( deleteTask(taskId) ); }

    return (
        <button
            className='button_remove_task'
            onClick={handleClick}
        ></button>
    );

};
