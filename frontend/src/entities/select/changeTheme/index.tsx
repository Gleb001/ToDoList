// import =================================================== //
// react ---------------------------------------------------- //
import React, { ChangeEvent } from 'react';
// redux ---------------------------------------------------- //
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { userThemeSelector } from '@app/redux/reducer/user/selectors';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { patchUser } from '@app/redux/reducer/user';
// components ----------------------------------------------- //
import { Select } from '@shared/components/select';
// types ---------------------------------------------------- //
import { Theme } from '@shared/types/user';
// internal ------------------------------------------------- //
import { USER_THEME_DATA } from './constants/userThemeData';
import type { SelectChangeTheme as SelectChangeThemeType } from './types';

// main ===================================================== //
export const SelectChangeTheme: SelectChangeThemeType = ({ }) => {

    const dispatch = useAppDispatch();
    let theme = useAppSelector(userThemeSelector);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch(
            patchUser({
                theme: event.target.value as Theme
            })
        );
    }

    return (
        <Select
            onChange={handleChange}
            data={USER_THEME_DATA}
            defaultValue={theme}
        />
    );

}