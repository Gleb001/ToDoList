// import ================================================= //
import "./index.css";
import React, { useEffect, useState } from 'react';
import Task from './components/task/index';
import ButtonAddTask from './components/button_add_task/index';
import { getTasks, addTask, deleteTask } from './api/index';
import { DataTaskType } from './components/task/types/index';

// main =================================================== //
function TaskManager() {

    let [tasks, setTasks] = useState([] as DataTaskType[]);
    useEffect(() => { getTasks().then(tasks => setTasks(tasks)); }, []);

    return (
        <>
            <div id="task_container" >{
                tasks.map(
                    task => <Task key={task.id} {...{
                        task,
                        handleDelete: () => deleteTask(task).then(tasks => setTasks(tasks))
                    }} />
                )
            }</div>
            <ButtonAddTask handleClick={() => addTask().then(tasks => setTasks(tasks))} />
        </>
    );

}

// export ================================================== //
export default TaskManager;