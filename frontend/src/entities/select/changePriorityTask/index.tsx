// import =================================================== //
// react ---------------------------------------------------- //
import React, { ChangeEvent, useContext } from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { patchActiveTask } from '@app/redux/reducer/task/actionCreators';
// context -------------------------------------------------- //
import { ActiveTaskInEditorContext } from '@widgets/task/Editor/context/ActiveTaskInEditorContext';
// components ----------------------------------------------- //
import { Select } from '@shared/components/select';
// types ---------------------------------------------------- //
import type { Priority } from '@shared/types/tasks';
// internal ------------------------------------------------- //
import "./ui/index.css";
import { PRIORITY_DATA } from './constants/priorityData';
import type { SelectTaskPriority as SelectTaskPriorityType } from "./types";

// main ===================================================== //
export const SelectTaskPriority: SelectTaskPriorityType = ({ }) => {

    const dispatch = useAppDispatch();
    const { id, priority, isComplete } = useContext(ActiveTaskInEditorContext);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch(
            patchActiveTask({
                id: id,
                priority: Number(event.target.value) as Priority
            })
        );
    }

    return (
        <Select
            defaultValue={PRIORITY_DATA[priority].value}
            data={PRIORITY_DATA}
            onChange={handleChange}
            disabled={isComplete}
        />
    );
    
};