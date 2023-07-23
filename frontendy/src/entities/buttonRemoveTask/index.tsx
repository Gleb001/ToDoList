// import
// react
import React, {useRef} from 'react';
// api
import ButtonRemoveTaskType from "./types";
// redux
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
// import { remove as removeTask } from '@app/redux/reducer/tasksReducer';
// internal
import "./ui/index.css";
import { deleteTask } from '@app/redux/reducer/actionCreators';

// main
export const ButtonRemoveTask: ButtonRemoveTaskType = ({
    taskId
}) => {

    let dispatch = useAppDispatch();

    function handleClick() {
        dispatch( deleteTask(taskId) );
    }

    return (
        <button
            className='button_remove_task'
            onClick={handleClick}
        ></button>
    );

};
