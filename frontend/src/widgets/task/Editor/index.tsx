// import =================================================== //
// react ---------------------------------------------------- //
import React from "react";
// components ----------------------------------------------- //
import { ActionWindow } from "@shared/components/actionWindow";
import { TitleTask } from "@entities/textarea/InputTask";
import { DescriptionTask } from "@entities/textarea/DescriptionTask";
import { NavLink } from "react-router-dom";
import { Button } from "@shared/components/button";
import { SelectTaskPriority } from "@entities/select/changePriorityTask";
import { ButtonCompleteTaskWithText } from "@entities/buttons/task/completeWithText";
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { set as setActiveTask } from "@app/redux/reducer/activeTask";
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { taskEditorType } from "./types";

// main ===================================================== //
export const TaskEditor: taskEditorType = ({ }) => {

    const dispatch = useAppDispatch();

    function handleExit() {
        dispatch(
            setActiveTask({})
        );
    }

    return (
        <ActionWindow.Wrapper id="task-editor">
            <ActionWindow.Header>
                <NavLink to="/tasks">
                    <Button onClick={handleExit}>←</Button>
                </NavLink>
            </ActionWindow.Header>
            <ActionWindow.Main>
                <TitleTask />
                <DescriptionTask />
                <div className="button-container-task-editor">
                    <ButtonCompleteTaskWithText />
                    <SelectTaskPriority />
                </div>
            </ActionWindow.Main>
        </ActionWindow.Wrapper>
    );

}