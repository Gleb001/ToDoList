// import ================================================= //
// react
import React, { useMemo, useRef, useState } from "react";
// components
import { ButtonRemoveTask } from "@entities/buttonRemoveTask";
import InputTask from "@entities/InputTask";
// internal
import "./ui/index.css";
import TaskType from "./types";
import {
    getStyleTask,
    createShadowTask,
    getTopPositionTask,
    changePositionTask
} from "./helpers";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { patchTasks } from "@app/redux/reducer/actionCreators";

// main =================================================== //
const Task: TaskType = ({ id, name, index }) => {

    let dispatch = useAppDispatch();

    let new_index = useRef(index);
    let taskRef = useRef<HTMLDivElement>(null);
    let timeoutRef = useRef<Timer>(null);

    let shadowTaskRef = useMemo(createShadowTask, []);
    let [isMoving, setIsMoving] = useState(false);

    function handleMouseDown() {
        timeoutRef.current = setTimeout(() => {
            setIsMoving(true);
            taskRef.current?.after(shadowTaskRef);
        }, 350);
    }
    function handleMouseUp() {
        if (timeoutRef.current) {

            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;

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

        }
    }
    function handleMouseLeave() {
        taskRef.current?.onmouseup;
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

    return (
        <div

            ref={taskRef}
            style={getStyleTask(taskRef.current, isMoving)}

            className="task"

            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}

        >
            <InputTask
                taskId={id}
                value={name}
                disabled={isMoving}
            />
            <ButtonRemoveTask taskId={id} />
        </div>
    );

};

// export ================================================== //
export default Task;