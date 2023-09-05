// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
import type { ChangeEvent } from "react";
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { patchUser } from '@app/redux/reducer/user/actionCreators';
import { userIsAutoDeleteTaskAfterCompleteSelector } from '@app/redux/reducer/user/selectors';
// components ----------------------------------------------- //
import { Select } from '@shared/components/select';
// internal ------------------------------------------------- //
import { OPTIONS_DATA } from './constants/optionsData';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import type { SelectAutoDeleteTaskAfterComplete as SelectAutoDeleteTaskAfterCompleteType } from './types';

// main ===================================================== //
export const SelectAutoDeleteTaskAfterComplete: SelectAutoDeleteTaskAfterCompleteType = ({ }) => {

    const dispatch = useAppDispatch();
    let autoDeleteTaskAfterComplete = useAppSelector(userIsAutoDeleteTaskAfterCompleteSelector);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch(
            patchUser({ 
                isAutoDeleteTaskAfterComplete: Boolean(Number(event.target.value))
            })
        );
    }

    return (
        <Select
            onChange={handleChange}
            data={OPTIONS_DATA}
            defaultValue={String(Number(autoDeleteTaskAfterComplete)!)}
        />
    );

}