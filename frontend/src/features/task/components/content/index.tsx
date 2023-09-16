// import =================================================== //
// components ----------------------------------------------- //
import { ButtonCompleteTask } from "@entities/buttons/task/complete";
import { TitleTask } from "@entities/paragraphs/titleTask";
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { ContentTask as ContentTaskType } from "./types";

// main ===================================================== //
export const ContentTask: ContentTaskType = ({ data }) => {

    let className = " task task-form ";
    if (data.isComplete) className += " disabled-task ";

    return (
        <div className={className}>
            <ButtonCompleteTask data={data} />
            <TitleTask data={data} />
        </div>
    );

};