// import =================================================== //
// react ---------------------------------------------------- //
import React, { useRef, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { set as setActiveTask } from "@app/redux/reducer/activeTask";
import { putTasks } from "@app/redux/reducer/tasks/actionCreators";
// types ---------------------------------------------------- //
import type { Timer } from "@shared/types/timer";
import type { movingTaskWrapper as MovingTaskWrapperType } from './types';
// internal ------------------------------------------------- //
import "./ui/index.css";
import { getStyle } from "./helpers/getStyle";
import {
    getTopPositionTask,
    changePositionTask,
    getContainerTaskRef,
    createShadowTask,
} from "./helpers";

// main ===================================================== //
export const MovingTaskWrapper: MovingTaskWrapperType = ({
    index, data, children
}) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    let timeoutRef = useRef<Timer>(null);
    let taskRef = useRef<HTMLDivElement>(null);
    let shadowTaskRef = useMemo(createShadowTask, []);

    let current_index = index;
    let [isMoving, setIsMoving] = useState(false);

    function handleMouseDown(event?: React.MouseEvent<HTMLDivElement>) {
        timeoutRef.current = setTimeout(() => {
            setIsMoving(true);
            getContainerTaskRef(taskRef.current!)!.style.userSelect = "none";
            taskRef.current?.after(shadowTaskRef);

            // @ts-ignore
            if (event.target.tagName !== "BUTTON") {
                dispatch(
                    setActiveTask(data)
                );
            }

        }, 350);
    }
    function handleMouseLeave() {
        if (isMoving) handleMouseUp();
    }
    function handleMouseUp(event?: React.MouseEvent<HTMLDivElement>) {

        clearTimeout(timeoutRef.current!);
        timeoutRef.current = null;

        if (isMoving) {

            getContainerTaskRef(taskRef.current!)!.style.userSelect = "text";
            shadowTaskRef.remove();
            setIsMoving(false);

            if (index !== current_index) {
                dispatch(
                    putTasks({
                        old_index: index,
                        new_index: current_index,
                    })
                );
            }

            dispatch(
                setActiveTask({})
            );

        } // @ts-ignore
        else if (event.target.tagName !== "BUTTON") {
            dispatch(
                setActiveTask(data)
            );
            navigate("/tasks/change");
        }

    }
    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        if (isMoving && taskRef.current) {
            let top_position = getTopPositionTask(event, taskRef.current!);
            let bottom_position = top_position + taskRef.current!.offsetHeight;
            current_index += changePositionTask(
                shadowTaskRef,
                top_position,
                bottom_position,
            );
        }
    }

    return (
        <div
            ref={taskRef}
            className="wrapper-task"
            style={getStyle(taskRef.current, isMoving)}

            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >{
            children
        }</div>
    );

};