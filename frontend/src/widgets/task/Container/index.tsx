// import =================================================== //
// react ---------------------------------------------------- //
import React, { useEffect, useMemo } from "react";
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { getTasks as getTasksReducer } from '@app/redux/reducer/tasks';
import { taskSelector } from "@app/redux/reducer/tasks/selectors";
// initial -------------------------------------------------- //
import type { TaskContainer as TaskContainerType } from "./types";
import { getTasks } from './helpers/getTasks';
import "./ui/index.css";

// main ===================================================== //
export const TaskContainer: TaskContainerType = () => {

    const dispatch = useAppDispatch();
    let { data, error, status } = useAppSelector(taskSelector);

    useEffect(() => {
        dispatch(
            getTasksReducer()
        );
    }, []);

    return (
        <div id="task-container">
            {status === "loading" && <h1>Загрузка задач...</h1>}
            {status === "succeeded" && getTasks(data)}
            {status === "failed" && <h1>{error}</h1>}
        </div>
    );

};