// import ================================================= //
// react -------------------------------------------------- //
import React from "react";
// redux ---------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ----------------------------------------------- //
import { ButtonCompleteTask } from "@entities/buttons/task/complete";
import { TitleTask } from "@entities/paragraphs/titleTask";
// internal ----------------------------------------------- //
import "./ui/index.css";
import type { ContentTask as ContentTaskType } from "./types";

// main =================================================== //
export const ContentTask: ContentTaskType = ({ data }) => {

    let active_task = useAppSelector(state => state.active_task);

    function getClassName() {
        let additionalClassName = "enabled-task";
        if (active_task.id && active_task.id !== data.id) {
            additionalClassName = "disabled-task";
        }
        return "task-form" + " " +  additionalClassName;
    }

    return (
        <div className={getClassName()} >
            <ButtonCompleteTask
                isComplete={data.isComplete}
                isPriority={data.isPriority}
                taskId={data.id}
            />
            <TitleTask
                isThrough={data.isComplete}
                text={data.title}
            />
        </div>
    );

};