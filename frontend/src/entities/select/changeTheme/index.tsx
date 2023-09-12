// import =================================================== //
// react ---------------------------------------------------- //
import { ChangeEvent } from 'react';
import type { FC } from "react";
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

// main ===================================================== //
export const SelectChangeTheme: FC = () => {

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