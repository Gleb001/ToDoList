// import ================================================= //
// react
import React, { Children, useEffect, useMemo, useRef, useState } from "react";
// internal
import "./ui/index.css";
import TaskType from "./types";
import {
    createShadowTask,
    getTopPositionTask,
    changePositionTask,
    getContainerTaskRef,
    getStyle
} from "./helpers";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { patchTasks } from "@app/redux/reducer/tasks/actionCreators";
import { Timer } from "@shared/types/timer";
import { set as active_task } from "@app/redux/reducer/activeTaskReducer";
import { ButtonCompleteTask } from "@entities/buttonCompleteTask";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { getLengthRow } from "@shared/utils/getLengthRow";

// main =================================================== //
const Task: TaskType = ({
    index, data
}) => {

    let dispatch = useAppDispatch();
    let index_active = useAppSelector(state => state.active_task);

    // refs
    let new_index = useRef(index);
    let timeoutRef = useRef<Timer>(null);
    let [isMoving, setIsMoving] = useState(false); 

    let taskRef = useRef<HTMLDivElement>(null);
    let shadowTaskRef = useMemo(createShadowTask, []);

    function handleMouseDown() {
        timeoutRef.current = setTimeout(() => {
            setIsMoving(true);
            getContainerTaskRef(taskRef.current!)!.style.userSelect = "none";
            taskRef.current?.after(shadowTaskRef);
        }, 350);
    }
    function handleMouseUp(event: React.MouseEvent<HTMLDivElement>) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;

            if (isMoving) {
                console.log("mouse up task");

                getContainerTaskRef(taskRef.current!)!.style.userSelect = "text";
                shadowTaskRef.remove();
                setIsMoving(false);

                if (index !== new_index.current) {
                    dispatch(
                        patchTasks({
                            old_index: index,
                            new_index: new_index.current
                        })
                    );
                }

            } else {
                let target = event.target as HTMLElement;
                if (target.tagName !== "BUTTON") dispatch(active_task(index));
            }

        }
    }
    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        if (isMoving && taskRef.current) {
            let top_position = getTopPositionTask(event, taskRef.current!);
            let bottom_position = top_position + taskRef.current!.offsetHeight;
            new_index.current += changePositionTask(
                shadowTaskRef,
                top_position,
                bottom_position,
            );
        }
    }

    function getTitle() {
        let title = data.title;
        if (!taskRef.current) return title || "Наименование задачи";

        let titleRef = taskRef.current.querySelector("p")!;
        let length_row = getLengthRow(titleRef);

        if (title.length > length_row) {
            let cropped_header = title.slice(0, length_row - 3);
            return cropped_header + "..."
        } else {
            return title || "Наименование задачи";
        }
    }

    let [title, setTitle] = useState(getTitle());
    useEffect(() => setTitle(getTitle()), [data]);

    let isActive = (index_active === -1 || index_active === index);
    let [style, className] = getStyle(taskRef.current, isMoving, isActive)
    return (
        <div

            ref={taskRef}

            style={style}
            className={className + " task "}

            onMouseLeave={() => taskRef.current?.onmouseup}
            onMouseUp={handleMouseUp}

            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}

        >
            <ButtonCompleteTask
                isComplete={data.isComplete}
                isPriority={data.isPriority}
                indexTask={index}
            />
            <p style={{textDecoration: data.isComplete ? "line-through" : ""}}>{title}</p>
        </div>
    );

};

// export ================================================== //
export default Task;