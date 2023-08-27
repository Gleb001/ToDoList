// import =================================================== //
// react ---------------------------------------------------- //
import React, { ChangeEvent } from 'react';
// components ----------------------------------------------- //
import { Select } from '@shared/components/select';
// redux ---------------------------------------------------- //
import { postUser } from '@app/redux/reducer/user';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { userViewTasksSelector } from '@app/redux/reducer/user/selectors';
import { useAppSelector } from '@shared/hooks/useAppSelector';
// internal ------------------------------------------------- //
import type { SelectViewTasks as SelectViewTasksType } from './types';

// constants ================================================ //
const VIEW_TASKS_DATA = [
    {
        value: "Плитка"
    },
    {
        value: "Список"
    },
];

// main ===================================================== //
export const SelectViewTasks: SelectViewTasksType = ({ }) => {

    const dispatch = useAppDispatch();
    let view = useAppSelector(userViewTasksSelector);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        let value = event.target.value;
        dispatch(
            postUser({
                view_tasks: value === "Плитка" ? "tile" : "list"
            })
        );
    }

    return (
        <Select
            onChange={handleChange}
            data={VIEW_TASKS_DATA}
            defaultValue={view === "list" ? "Список" : "Плитка"}
        />
    );

}