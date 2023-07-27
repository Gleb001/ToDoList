import { TegContainer } from "@widgets/tegContainer";
import taskEditorType from "./types";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import "./ui/index.css";
import { DescriptionTask } from "@entities/DescriptionTask";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import TitleTask from "@entities/InputTask";
import { patchTask } from "@app/redux/reducer/tasks/actionCreators";
import { TaskType } from "@shared/types/tasks";
import { ButtonRemoveTask } from "@entities/buttonRemoveTask";
import { ButtonTaskPriority } from "@entities/buttonTaskPriority";
import { ButtonHideTaskEditor } from "@entities/buttonHideTaskEditor";

// main
export const TaskEditor: taskEditorType = ({
    indexTask
}) => {

    let dispatch = useAppDispatch();
    let { title, description } = useAppSelector(state => state.tasks.data)[indexTask];

    function changeTask<Type extends keyof TaskType>(param_name: Type, value: TaskType[Type]) {
        dispatch(
            patchTask({
                index: indexTask,
                parameters: { [param_name]: value }
            })
        );
    }

    return (
        <div id="task_editor">
            <TegContainer />
            <div>
                <TitleTask
                    value={title}
                    change={(value) => changeTask("title", value)}
                />
                <DescriptionTask
                    value={description}
                    change={(value) => changeTask("description", value)}
                />
            </div>
            <div className="button_container">
                <ButtonHideTaskEditor />
                <ButtonRemoveTask indexTask={indexTask} />
                <ButtonTaskPriority indexTask={indexTask} />
            </div>
        </div>
    );
}