// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
import { useNavigate } from "react-router";
// components ----------------------------------------------- //
import { ButtonExit } from "@shared/components/buttonExit";
import { ButtonRemoveTask } from "@entities/buttons/task/remove";
import { ButtonTaskPriority } from "@entities/buttons/task/priority";
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { set as setActiveTask } from "@app/redux/reducer/activeTask";
// inherit -------------------------------------------------- //
import './ui/index.css';
import type { HeaderTaskEditor as HeaderTaskEditorType } from './types';
import { ActionWindow } from '@shared/components/actionWindow';

// main ===================================================== //
export const HeaderTaskEditor: HeaderTaskEditorType = ({ }) => {

    let navigate = useNavigate();
    let dispatch = useAppDispatch();

    function handleExit() {
        dispatch(
            setActiveTask({})
        );
        navigate(-1);
    }

    return (
        <ActionWindow.Header>
            <ButtonExit onClick={handleExit} />
            <ButtonRemoveTask onClick={() => navigate(-1)}/>
            <ButtonTaskPriority />
        </ActionWindow.Header>
    );

}