// import =================================================== //
// react ---------------------------------------------------- //
import React, { MouseEventHandler } from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { deleteTask } from '@app/redux/reducer/tasks';
import { set as setActiveTask } from '@app/redux/reducer/activeTask';
// internal ------------------------------------------------- //
import "./ui/index.css";
import ButtonRemoveTaskType from "./types";
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { Button } from '@shared/components/button';

// main ===================================================== //
export const ButtonRemoveTask: ButtonRemoveTaskType = ({
    onClick
}) => {

    let dispatch = useAppDispatch();
    let active_task = useAppSelector(state => state.active_task);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (onClick) onClick(event);
        dispatch(
            deleteTask(active_task.id!)
        );
    }

    return (
        <Button
            className='button-remove-task'
            onClick={handleClick}
        >
            Удалить
        </Button>
    );

};
