// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { patchTask } from '@app/redux/reducer/tasks';
import { activeTaskSelector } from '@app/redux/reducer/activeTask/selectors';
// components ----------------------------------------------- //
import { Button } from '@shared/components/button';
// internal ------------------------------------------------- //
import type { ButtonCompleteTaskWithText as ButtonCompleteTaskWithTextType } from './types';


// main ===================================================== //
export const ButtonCompleteTaskWithText: ButtonCompleteTaskWithTextType = ({ }) => {

    const dispatch = useAppDispatch();
    let active_task = useAppSelector(activeTaskSelector);

    function handleClick() {
        dispatch(
            patchTask({
                id: active_task.id!,
                isComplete: !active_task.isComplete!
            })
        )
    }

    return (
        <Button onClick={handleClick} >{
            active_task.isComplete! ?
                "Отменить выполнение" :
                "Выполнить"
        }</Button>
    );

}