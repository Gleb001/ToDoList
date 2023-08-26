// import =================================================== //
// react ---------------------------------------------------- //
import React, { useEffect, useState } from "react";
// components ----------------------------------------------- //
import { ActionWindow } from "@shared/components/actionWindow";
import { TitleTask } from "@entities/textarea/InputTask";
import { DescriptionTask } from "@entities/textarea/DescriptionTask";
// redux ---------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { patchTask } from "@app/redux/reducer/tasks/actionCreators";
// internal ------------------------------------------------- //
import type { ChangeTaskType, taskEditorType } from "./types";
import "./ui/index.css";

// main ===================================================== //
export const TaskEditor: taskEditorType = ({ }) => {

    let dispatch = useAppDispatch();
    let active_task = useAppSelector(state => state.active_task);

    const changeTask: ChangeTaskType = (param_name, value) => {
        dispatch(
            patchTask({
                id: active_task.id!,
                [param_name]: value
            })
        );
    }

    return (
        <ActionWindow.Wrapper>
            <ActionWindow.Main>
                <TitleTask
                    value={active_task.title!}
                    change={(value) => changeTask("title", value)}
                />
                <DescriptionTask
                    value={active_task.title!}
                    change={(value) => changeTask("description", value)}
                />
            </ActionWindow.Main>
        </ActionWindow.Wrapper>
    );

}