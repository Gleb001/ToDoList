// import =================================================== //
// react ---------------------------------------------------- //
import React, { useContext } from 'react';
import type { MouseEvent } from 'react';
// context -------------------------------------------------- //
import { ActiveTaskInEditorContext } from '@widgets/task/Editor/context/ActiveTaskInEditorContext';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { deleteActiveTask } from '@app/redux/reducer/task';
// components ----------------------------------------------- //
import { Button } from '@shared/components/button';
// internal ------------------------------------------------- //
import ButtonRemoveTaskType from "./types";

// main ===================================================== //
export const ButtonRemoveTask: ButtonRemoveTaskType = ({
    onClick
}) => {

    const dispatch = useAppDispatch();
    let { id } = useContext(ActiveTaskInEditorContext);

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        dispatch(
            deleteActiveTask(id)
        );
        setTimeout(() => {
            if (onClick) onClick(event);
        }, 250);
    }

    return (
        <Button onClick={handleClick}>
            Удалить
        </Button>
    );

}