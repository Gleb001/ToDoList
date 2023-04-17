// import ================================================= //
import "./index.css";
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import Task from './components/task/index';
import ButtonAddTask from './components/button_add_task/index';
import { getTasks, addTask, deleteTask } from './api/index';

// main =================================================== //
function TaskManager() {

    let [tasks, setTasks] = useState([] as any[]);
    useEffect(() => { getTasks().then(tasks => setTasks(tasks)); }, []);

    let task_manager = useRef<HTMLDivElement>(null);
    function getIndexScrolling(task: HTMLDivElement) {

        // main variables
        let current_task_pos = task.getBoundingClientRect().top;
        let half_height_task = (task.offsetHeight / 2);

        // is task low bottom border
        let bottom_border_position = task_manager.current!.offsetTop + half_height_task;
        let isTaskLowBottomBorder = current_task_pos < bottom_border_position;

        // is task high top border
        let top_border_position = task_manager.current!.offsetTop + task_manager.current!.offsetHeight - half_height_task;
        let isTaskHighTopBorder = (current_task_pos + task.offsetHeight) > top_border_position;

        //  return result
        let result = isTaskLowBottomBorder ? -7 : isTaskHighTopBorder ? 7 : 0;
        return result;

    }
    function scrolling(task: HTMLDivElement) {
        let IDinterval = setInterval(() => {
            if (!task.classList.contains("moving_task")) {
                clearInterval(IDinterval);
            } else {

                let index = getIndexScrolling(task);
                let current_scroll = task_manager.current!.scrollTop;

                let min_value = 0;
                let max_value = task_manager.current!.scrollHeight - task_manager.current!.offsetHeight;
                let new_value = current_scroll + index;

                if (
                    index === 0 ||
                    new_value < min_value ||
                    new_value > max_value
                ) return;

                task_manager.current!.scrollTo({
                    top: new_value, left: 0, behavior: "auto"
                });

                let top_task = parseInt(window.getComputedStyle(task).top);
                task.style.top = top_task + index + "px";

            }
        }, 20);
    }
    function getTaskOnClick(element: Element): HTMLDivElement | null {
        if (element === task_manager.current) return null;
        if (element.classList.contains("task")) return element as HTMLDivElement;
        return getTaskOnClick(element.parentElement!);
    }

    let handleMouseEvents = {

        interval_moution_task: 0,

        down(event: MouseEvent) {
            let task = getTaskOnClick(event.target as Element);
            let hasScroll = task_manager.current!.scrollHeight > task_manager.current!.offsetHeight;
            if (task && hasScroll) {
                this.interval_moution_task = setInterval(() => {
                    if (task?.classList.contains("moving_task")) {
                        scrolling(task);
                        clearInterval(this.interval_moution_task);
                    }
                }, 100);
            }
        },
        up() { clearInterval(this.interval_moution_task); },

    };

    return (
        <>
            <div
                ref={task_manager}
                id="task_container"
                onMouseDown={event => handleMouseEvents.down(event)}
                onMouseUp={event => handleMouseEvents.up()}
            >{
                    tasks.map(
                        task => <Task key={task.id} {...{
                            data_task: task,
                            handleDelete: () => {
                                deleteTask(task).then(tasks => setTasks(tasks));
                            }
                        }} />
                    )
                }</div>
            <ButtonAddTask handleClick={() => addTask().then(tasks => setTasks(tasks))} />
        </>
    );

}

// export ================================================== //
export default TaskManager;