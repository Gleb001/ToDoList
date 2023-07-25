// import ================================================= //
// react
import React, { useEffect } from 'react';
// components
import ButtonAddTask from '@entities/buttonAddTask';
import Task from '@features/task';
// redux
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { fetchTasks } from '@app/redux/reducer/tasksReducer';
// internal 
import TaskManagerType from "./types";
import "./ui/index.css";

// main =================================================== //
const TaskManager: TaskManagerType = () => {

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
    let dispatch = useAppDispatch();

    useEffect(() => {
        if (status === "pending") dispatch(fetchTasks())
    }, []);

    return (
        <div id='task_manager'>
            <div id="task_container">
                {status === "loading" && <h1>Загрузка задач...</h1>}
                {error && <h1>{error}</h1>}
                {
                    !error && data.map(
                        ({ id, name }, index) =>
                            <Task key={id} id={id} name={name} index={index}/>
                    )
                }
                {
                    (!data.length && status === "succeeded") &&
                    <h1>У вас нет задач! Вы свободный человек</h1>
                }
            </div>
            <ButtonAddTask />
        </ div>
    );
}

// export ================================================== //
export default TaskManager;