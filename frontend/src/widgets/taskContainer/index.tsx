// import ================================================= //
// react
import React, { useEffect, useMemo } from 'react';
// components
import ButtonAddTask from '@entities/buttonAddTask';
import Task from '@features/task';
import InputTask from '@entities/InputTask';
// redux
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { fetchTasks } from '@app/redux/reducer/tasks/tasksReducer';
// internal 
import TaskManagerType from "./types";
import "./ui/index.css";
import { ButtonCompleteTask } from '@entities/buttonCompleteTask';
import { getTasks } from './helpers';
import { ButtonChangeTheme } from '@entities/buttonChageTheme';

// main =================================================== //
const TaskManager: TaskManagerType = () => {

    let dispatch = useAppDispatch();

    let { data, error, status } = useAppSelector(
        state => state.tasks,
        // есть сомнения по поводу данног участка кода
        // 
        // (prevState, curState) => {
        //     let hasChangedData = (
        //         prevState.data.length !== curState.data.length &&
        //         curState.data.length !== 0
        //     );
        //     let hasChangedError = (
        //         curState.error !== prevState.error &&
        //         curState.error.length
        //     );
        //     return !hasChangedData && !hasChangedError;
        // }
        // 
    );

    useEffect(() => {
        if (status === "pending") dispatch(fetchTasks())
    }, []);

    let tasks = useMemo(() => {
        console.log("render tasks");
        return getTasks(data);
    }, [data]);

    return (
        <div id='task_manager'>
            <div className="button_container">
                <ButtonAddTask />
                <ButtonChangeTheme />
            </div>
            <div id="task_container">
                {error && <h1>{error}</h1>}
                {
                    status === "loading" ?
                        <h1>Загрузка задач...</h1> :
                        tasks
                }
            </div>
        </ div>
    );
}

// export ================================================== //
export default TaskManager;