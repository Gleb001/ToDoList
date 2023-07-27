// import
// react
import React from 'react';
// api
import ButtonRemoveTaskType from "./types";
// redux
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
// internal
import "./ui/index.css";
import { deleteTask } from '@app/redux/reducer/tasks/tasksReducer';
import { set as setActiveTask } from '@app/redux/reducer/activeTaskReducer';

// main
export const ButtonRemoveTask: ButtonRemoveTaskType = ({
    indexTask
}) => {

    let dispatch = useAppDispatch();

    function handleClick() {
        dispatch( deleteTask(indexTask) );
        dispatch( setActiveTask(-1) );
    }

    return (
        <button
            className='button_remove_task'
            onClick={handleClick}
        >X</button>
    );

};
