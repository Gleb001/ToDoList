// import =================================================== //
// react ---------------------------------------------------- //
import { useEffect } from "react";
import type { FC } from "react";
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { getListTasks } from '@app/redux/reducer/task';
import { listTaskSelector } from "@app/redux/reducer/task/selectors";
// libs ----------------------------------------------------- //
import { bubbleSortArray } from "@shared/libs/bubbleSortArray";
// constants ------------------------------------------------ //
import {
    lowerPriorityTask,
    higherIsCompleteTask
} from "./constants/filters";
// types ---------------------------------------------------- //
import type { Task } from "@shared/types/tasks";
// internal ------------------------------------------------- //
import "./ui/index.css";
import { getTasks } from './helpers/getTasks';

// main ===================================================== //
export const TaskContainer: FC = () => {

    const dispatch = useAppDispatch();
    let { data, error, status } = useAppSelector(listTaskSelector);

    useEffect(() => {
        dispatch(
            getListTasks()
        );
    }, []);

    function getSortedTasks() {
        let sorted_tasks_on_priority = bubbleSortArray<Task>(
            data,
            lowerPriorityTask
        );
        let sorted_tasks_on_isComplete = bubbleSortArray<Task>(
            sorted_tasks_on_priority,
            higherIsCompleteTask,
        );
        return getTasks(sorted_tasks_on_isComplete);
    }

    return (
        <div id="task-container">
            {status === "loading" && <h1>Загрузка задач...</h1>}
            {status === "succeeded" && getSortedTasks()}
            {status === "failed" && <h1>{error}</h1>}
        </div>
    );

};