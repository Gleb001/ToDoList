// import
// react
import React, { useState } from 'react';
// api
import ButtonChangeThemeType from "./types";
// redux
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
// internal
import "./ui/index.css";
import { set as setIsCompleteTask } from '@app/redux/reducer/activeTaskReducer';

// types
type themeType = "light" | "dark"

// main
export const ButtonChangeTheme: ButtonChangeThemeType = () => {

    let [theme, setTheme] = useState<themeType>("light");

    function handleClick() {
        let new_theme: themeType = theme === "light" ? "dark" : "light";
        console.log();
        document.documentElement.style.cssText = `
            --primary-color:              ${new_theme === "light" ? "black" : "white"};
            --primary-backgound-color:    ${new_theme === "light" ? "white" : "black"};
        
            --disabled-task-color:        ${new_theme === "light" ? "#A3A3A3" : "#A3A3A3"};
            --secondary-background-color: ${new_theme === "light" ? "#E7E7E7" : "#676767"};
            --main-task-color:            ${new_theme === "light" ? "red" : "red"};
        `;
        setTheme(new_theme);
    }

    return (
        <button
            className='button_change_theme'
            onClick={handleClick}
        >{theme}</button>
    );

};
