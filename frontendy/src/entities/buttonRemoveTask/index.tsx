// import
// react
import React from 'react';
// api
import ButtonRemoveTaskType from "./types";
// redux
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { remove as removeTask } from '@app/redux/reducer/tasksReducer';
// internal
import "./ui/index.css";
import { deleteTask } from './api/deleteTask';

// main
export const ButtonRemoveTask: ButtonRemoveTaskType = ({
    taskId
}) => {

    let dispatch = useAppDispatch();

    function handleClick() {
        deleteTask(taskId);
        dispatch(removeTask(taskId));
    }
 
    return (
        <button
            className='button_remove_task'
            onClick={handleClick}
        ></button>
    );
    
};
