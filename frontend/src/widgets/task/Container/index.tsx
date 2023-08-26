// import =================================================== //
// react ---------------------------------------------------- //
import React, { useEffect, useMemo } from "react";
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { getTasks as getTasksReducer } from '@app/redux/reducer/tasks';
// initial -------------------------------------------------- //
import type { TaskContainer as TaskContainerType } from "./types";
import { getTasks } from './helpers/getTasks';
import "./ui/index.css";
import { SortTasks } from "./helpers/sortTasks";

// main ===================================================== //
export const TaskContainer: TaskContainerType = () => {

    const dispatch = useAppDispatch();
    let { data, error, status } = useAppSelector(state => state.tasks);
    console.log(data);

    let tasks = useMemo(() => (
        getTasks(
            SortTasks(data)
        )
    ), [data]);
    useEffect(() => {
        status === "pending" && dispatch(getTasksReducer());
    }, []);

    return (
        <div id="task-container">
            {status === "loading" && <h1>Загрузка задач...</h1>}
            {status === "succeeded" && tasks}
            {status === "failed" && <h1>{error}</h1>}
        </div>
    );

};