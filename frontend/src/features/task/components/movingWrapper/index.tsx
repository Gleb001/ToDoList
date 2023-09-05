// import =================================================== //
// react ---------------------------------------------------- //
import React, { useRef, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { setActiveTask } from "@app/redux/reducer/task";
import { putListTasks } from "@app/redux/reducer/task/actionCreators";
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
    let WrapperTaskRef = useRef<HTMLDivElement>(null);
    let shadowTaskRef = useMemo(createShadowTask, []);

    let current_index = index;
    let [isMoving, setIsMoving] = useState(false);

    function handleMouseDown(event?: React.MouseEvent<HTMLDivElement>) {
        timeoutRef.current = setTimeout(() => {

            setIsMoving(true);

            let ContainerTaskRef = getContainerTaskRef(WrapperTaskRef.current!)!;
            ContainerTaskRef.style.userSelect = "none";

            WrapperTaskRef.current?.after(shadowTaskRef);

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

            getContainerTaskRef(WrapperTaskRef.current!)!.style.userSelect = "text";
            shadowTaskRef.remove();
            setIsMoving(false);

            if (index !== current_index) {
                dispatch(
                    putListTasks({
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
            navigate("/tasks/" + data.id + "/edit");
        }

    }
    function handleMouseMove(event?: React.MouseEvent<HTMLDivElement>) {
        if (event && isMoving && WrapperTaskRef.current) {
            let top_position = getTopPositionTask(event, WrapperTaskRef.current!);
            let bottom_position = top_position + WrapperTaskRef.current!.offsetHeight;
            current_index += changePositionTask(
                shadowTaskRef,
                top_position,
                bottom_position,
            );
        }
    }

    return (
        <div
            ref={WrapperTaskRef}
            style={getStyle(WrapperTaskRef.current, isMoving)}

            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >{
            children
        }</div>
    );

};