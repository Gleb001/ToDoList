// import =================================================== //
// react ---------------------------------------------------- //
import React, { ChangeEvent } from 'react';
// components ----------------------------------------------- //
import { Select } from '@shared/components/select';
// redux ---------------------------------------------------- //
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { userThemeSelector } from '@app/redux/reducer/user/selectors';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { postUser } from '@app/redux/reducer/user';
// internal ------------------------------------------------- //
import type { SelectChangeTheme as SelectChangeThemeType } from './types';

// constants ================================================ //
const USER_THEME_DATA = [
    {
        value: "Светлая",
    },
    {
        value: "Темная",
    }
];

// main ===================================================== //
export const SelectChangeTheme: SelectChangeThemeType = ({ }) => {

    const dispatch = useAppDispatch();
    let theme = useAppSelector(userThemeSelector);
    console.log(theme);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        let value = event.target.value;
        dispatch(
            postUser({
                theme: value === "Светлая" ? "light" : "dark"
            })
        );
    }

    return (
        <Select
            onChange={handleChange}
            data={USER_THEME_DATA}
            defaultValue={theme === "light" ? "Светлая" : "Темная"}
        />
    );

}