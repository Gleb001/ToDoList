// import ================================================= //
import React, { useEffect, useState } from 'react';
import Task from './task/task';
import "./task_manager.css";
import ButtonAddTask from './button_add_task/button_add_task';
import { responseAddTask, responseDeleteTask, responseGetTasks } from '../api/task';
import { TaskType } from '../types/task';

// main =================================================== //
function TaskManager() {

    let [tasks, setTasks] = useState([] as TaskType[]);

    function handleAddTask() {
        responseAddTask()
            .then(tasks => setTasks(tasks))
            .catch(error => console.log(error));
    }
    function handleMoveTask() {

    }
    function handleDeleteTask(id: TaskType["id"]) {
        responseDeleteTask(id).then(tasks => setTasks(tasks));
    }
    useEffect(() => {
        responseGetTasks().then(tasks => setTasks(tasks));
    }, []);

    return (
        <div id='task_manager'>
            <div id="task_container">{
                tasks.map(task => <Task
                    key={task.id}
                    {...{
                        task,
                        handleMoveTask,
                        handleDelete: () => handleDeleteTask(task.id)
                    }}
                />)
            }</div>
            <ButtonAddTask handleClick={() => handleAddTask()} />
        </div>
    );

};

// export ================================================== //
export default TaskManager;