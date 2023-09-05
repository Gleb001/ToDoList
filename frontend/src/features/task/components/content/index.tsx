// import =================================================== //
// react ---------------------------------------------------- //
import React from "react";
// redux ---------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { activeTaskSelector } from "@app/redux/reducer/task/selectors";
// components ----------------------------------------------- //
import { ButtonCompleteTask } from "@entities/buttons/task/complete";
import { TitleTask } from "@entities/paragraphs/titleTask";
// helpers -------------------------------------------------- //
import { getClassName } from "./helpers/getClassName";
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { ContentTask as ContentTaskType } from "./types";

// main ===================================================== //
export const ContentTask: ContentTaskType = ({ data }) => {

    const active_task = useAppSelector(activeTaskSelector)["data"];

    return (
        <div className={getClassName(data, active_task)} >
            <ButtonCompleteTask data={data} />
            <TitleTask data={data} />
        </div>
    );

};