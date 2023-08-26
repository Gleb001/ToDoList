// import =================================================== //
// react ---------------------------------------------------- //
import React, { useState } from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
// action creators ------------------------------------------ //
import { patchTask } from '@app/redux/reducer/tasks/actionCreators';
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { ButtonTaskPriority as ButtonTaskPriorityType } from "./types";
import { useAppSelector } from '@shared/hooks/useAppSelector';

// main ----------------------------------------------------- //
export const ButtonTaskPriority: ButtonTaskPriorityType = ({ }) => {

    const dispatch = useAppDispatch();
    const active_task = useAppSelector(state => state.active_task);

    function handleClick() {
        dispatch(
            patchTask({
                id: active_task.id!,
                isPriority: !active_task.isPriority
            })
        );
    }

    let className = active_task.isPriority ? "is-priority" : "";
    return (
        <button
            className={className}
            onClick={handleClick} 
        >
            priority
        </button>
    );
    
};