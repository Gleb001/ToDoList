// import =================================================== //
// react ---------------------------------------------------- //
import React, { useEffect, useMemo, useState } from 'react';
import type { MouseEvent } from "react";
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { getUser, postUser } from '@app/redux/reducer/user';
// types ---------------------------------------------------- //
import type { Theme } from '@shared/types/user';
// components ----------------------------------------------- //
import { Button } from '@shared/components/button';
// internal ------------------------------------------------- //
import type { ButtonChangeTheme as ButtonChangeThemeType } from "./types";

// main ===================================================== //
export const ButtonChangeTheme: ButtonChangeThemeType = ({}) => {

    let dispatch = useAppDispatch();
    let { data, status, error } = useAppSelector(state => state.user);
    useEffect(() => { status === "pending" && dispatch(getUser()) }, [dispatch]);

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        // @ts-ignore: there is a style property,
        // but it is not according to TypeScript
        event.target.style.disabled = true; // ?
        dispatch(
            postUser({
                theme: data.theme === "light" ? "dark" : "light"
            })
        );
    }

    document.documentElement.style.cssText = `
        --primary-color:              ${data.theme === "light" ? "black" : "white"};
        --primary-backgound-color:    ${data.theme === "light" ? "white" : "black"};
        
        --disabled-task-color:        ${data.theme === "light" ? "#A3A3A3" : "#A3A3A3"};
        --secondary-background-color: ${data.theme === "light" ? "#E7E7E7" : "#676767"};
        --main-task-color:            ${data.theme === "light" ? "red" : "red"};
    `;

    return (
        <Button
            className='button-change-theme'
            onClick={handleClick}
        >{
            data.theme
        }</Button>
    );

};