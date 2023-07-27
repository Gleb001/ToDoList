// import
// react
import React from 'react';
// api
import ButtonHideTaskEditorType from "./types";
// redux
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
// internal
import "./ui/index.css";
import { set as setActiveTask } from '@app/redux/reducer/activeTaskReducer';

// main
export const ButtonHideTaskEditor: ButtonHideTaskEditorType = () => {

    let dispatch = useAppDispatch();
    
    return (
        <button
            className='button_hide_task_editor'
            onClick={() => dispatch(setActiveTask(-1))}
        >
            ←
        </button>
    );

};
