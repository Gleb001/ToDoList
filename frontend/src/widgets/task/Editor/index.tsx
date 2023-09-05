// import =================================================== //
// react ---------------------------------------------------- //
import React, { createContext } from "react";
import { useNavigate, useParams } from "react-router";
// check types ---------------------------------------------- //
import { isTask } from "@shared/types/tasks";
// components ----------------------------------------------- //
import { ActionWindow } from "@shared/components/actionWindow";
import { TitleTask } from "@entities/textarea/InputTask";
import { DescriptionTask } from "@entities/textarea/DescriptionTask";
import { Button } from "@shared/components/button";
import { SelectTaskPriority } from "@entities/select/changePriorityTask";
import { ButtonCompleteTaskWithText } from "@entities/buttons/task/completeWithText";
import { ButtonRemoveTask } from "@entities/buttons/task/remove";
// redux ---------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { activeTaskByIdSelector } from "@app/redux/reducer/task/selectors";
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { taskEditorType } from "./types";
import { ActiveTaskInEditorContext } from "./context/ActiveTaskInEditorContext";

// main ===================================================== //
export const TaskEditor: taskEditorType = ({ }) => {

    const { id } = useParams();
    const active_task = useAppSelector(state => activeTaskByIdSelector(state, id!));

    const navigate = useNavigate();
    const handleExit = () => navigate("/tasks");

    return (
        <ActionWindow.Wrapper id="task-editor">
            <ActionWindow.Header>
                <Button onClick={handleExit}>←</Button>
            </ActionWindow.Header>
            <ActionWindow.Main>
                {
                    isTask(active_task) &&
                    <ActiveTaskInEditorContext.Provider value={active_task}>
                        <TitleTask />
                        <DescriptionTask />
                        <div className="button-container-task-editor">
                            <ButtonRemoveTask onClick={handleExit} />
                            <ButtonCompleteTaskWithText onClick={handleExit} />
                            <SelectTaskPriority />
                        </div>
                    </ActiveTaskInEditorContext.Provider>
                }
            </ActionWindow.Main>
        </ActionWindow.Wrapper>
    );

}