// import =================================================== //
// react ---------------------------------------------------- //
import React, { ChangeEvent } from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { patchTask } from '@app/redux/reducer/tasks/actionCreators';
import { activeTaskSelector } from '@app/redux/reducer/activeTask/selectors';
// components ----------------------------------------------- //
import { Select } from '@shared/components/select';
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { SelectTaskPriority as SelectTaskPriorityType } from "./types";

// constants ================================================ //
const PRIORITY_DATA =[
    {
        value: "Не срочно и не важно",
    },
    {
        value: "Срочно и не важно",
    },
    {
        value: "Не срочно и важно",
    },
    {
        value: "Срочно и важно",
    },
];

// main ===================================================== //
export const SelectTaskPriority: SelectTaskPriorityType = ({ }) => {

    const dispatch = useAppDispatch();
    const active_task = useAppSelector(activeTaskSelector);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        let priorityIndex = 0;
        PRIORITY_DATA.forEach((priority, index) => {
            if (priority.value === event.target.value) {
                priorityIndex = index;
            }
        });
        dispatch(
            patchTask({
                id: active_task.id!,
                priority: priorityIndex
            })
        );
    }

    return (
        <Select
            defaultValue={PRIORITY_DATA[active_task.priority!].value}
            disabled={active_task.isComplete!}
            data={PRIORITY_DATA}
            onChange={handleChange}
        />
    );
    
};