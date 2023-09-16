// import =================================================== //
// react ---------------------------------------------------- //
import { useRef, useMemo, useEffect } from 'react';
import type { MutableRefObject } from 'react';
import { useNavigate } from 'react-router';
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
// import { setIdActiveTask } from "@app/redux/reducer/task";
import { putListTasks } from "@app/redux/reducer/task/actionCreators";
// types ---------------------------------------------------- //
import type { Timer } from "@shared/types/timer";
import type { movingTaskWrapper as MovingTaskWrapperType } from './types';
// internal ------------------------------------------------- //
import "./ui/index.css";
import {
    changePositionTask,
} from "./helpers/positioning/changePositionTask";
import { getElementMove } from './helpers/elementMove';
import type { ElementMove } from './helpers/elementMove';
import { createShadowTask } from './helpers/createShadowTask';
import { getPositions } from './helpers/positioning/getPositions';

// main ===================================================== //
export const MovingTaskWrapper: MovingTaskWrapperType = ({
    initial_index, id, children
}) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    let timeoutRef: Timer = null;
    let current_index = initial_index;

    let task = useRef<HTMLDivElement>(null);
    let shadowTask = useMemo(createShadowTask, []);
    let Move = useRef() as MutableRefObject<ElementMove>;
    useEffect(() => {
        Move.current = getElementMove(
            task.current!,
            shadowTask
        );
    }, []);

    function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
        timeoutRef = setTimeout(() => {
            Move.current("on");
        }, 350);
    }
    function handleMouseLeave() {
        if (Move.current.is) handleMouseUp();
    }
    function handleMouseUp(event?: React.MouseEvent<HTMLDivElement>) {

        clearTimeout(timeoutRef!);

        if (Move.current.is) {

            Move.current("off")

            if (initial_index !== current_index) {
                dispatch(
                    putListTasks({
                        old_index: initial_index,
                        new_index: current_index,
                    })
                );
            }

            // @ts-ignore: event.target is a HTMLElement
        } else if (event.target.tagName !== "BUTTON") {
            navigate(`/tasks/${id}/edit`);
        }

    }
    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        if (Move.current.is) {
            let [top, bottom] = getPositions(task.current!, event);
            current_index += changePositionTask(shadowTask, top, bottom);
        }
    }

    return (
        <div
            ref={task}

            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >{
            children
        }</div>
    );

};