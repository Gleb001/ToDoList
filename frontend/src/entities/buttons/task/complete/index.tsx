// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { deleteActiveTask, patchActiveTask } from '@app/redux/reducer/task';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { userIsAutoDeleteTaskAfterCompleteSelector } from '@app/redux/reducer/user/selectors';
// internal ------------------------------------------------- //
import "./ui/index.css";
import { getClassName } from './helpers/getClassName';
import type { ButtonRemoveTask as ButtonCompleteTaskType } from "./types";

// main ===================================================== //
export const ButtonCompleteTask: ButtonCompleteTaskType = ({
    data
}) => {

    const dispatch = useAppDispatch();
    let isAutoDeleteTaskAfterComplete = useAppSelector(userIsAutoDeleteTaskAfterCompleteSelector);

    function handleClick() {
        if (isAutoDeleteTaskAfterComplete) {
            dispatch(
                deleteActiveTask(data.id)
            );
        } else {
            dispatch(
                patchActiveTask({
                    id: data.id,
                    isComplete: !data.isComplete
                })
            );
        }
    }

    return (
        <button
            className={getClassName(data.priority, data.isComplete)}
            onClick={handleClick}
        />
    );

};