import React, { useState } from 'react';
import ButtonTaskPriorityType from "./types"
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { patchTask } from '@app/redux/reducer/tasks/actionCreators';
import "./ui/index.css";

// mai
export const ButtonTaskPriority: ButtonTaskPriorityType = ({
    indexTask
}) => {

    let dispatch = useAppDispatch();
    let [isPriority, setIsPriority] = useState(false);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setIsPriority(!isPriority);
        dispatch(
            patchTask({
                index: indexTask,
                parameters: {
                    isPriority: !isPriority
                }
            })
        );
    }

    return (
        <button
            className="button_task_priority"
            onClick={handleClick}
        >
            is priority
        </button>
    );
};
