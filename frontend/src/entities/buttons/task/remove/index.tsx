// import =================================================== //
// react ---------------------------------------------------- //
import React, { MouseEventHandler } from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { deleteTask } from '@app/redux/reducer/tasks';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { activeTaskSelector } from '@app/redux/reducer/activeTask/selectors';
// components ----------------------------------------------- //
import { Button } from '@shared/components/button';
// internal ------------------------------------------------- //
import "./ui/index.css";
import ButtonRemoveTaskType from "./types";

// main ===================================================== //
export const ButtonRemoveTask: ButtonRemoveTaskType = ({ }) => {

    const dispatch = useAppDispatch();
    let active_task = useAppSelector(activeTaskSelector);

    function handleClick() {
        dispatch(
            deleteTask(active_task.id!)
        );
    }

    return (
        <Button onClick={handleClick}>
            Удалить
        </Button>
    );

}