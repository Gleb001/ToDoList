// import =================================================== //
// react ---------------------------------------------------- //
import { useEffect } from "react";
import type { FC } from "react";
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { getListTasks } from '@app/redux/reducer/task';
import { listTaskSelector } from "@app/redux/reducer/task/selectors";
// internal ------------------------------------------------- //
import "./ui/index.css";
import { getSortedTasks } from "./helpers/getSortedTasks";

// main ===================================================== //
export const TaskContainer: FC = () => {

    const dispatch = useAppDispatch();
    let { data, error, status } = useAppSelector(listTaskSelector);

    useEffect(() => {
        if (status === "pending") {
            dispatch(
                getListTasks()
            );
        }
    }, []);

    return (
        <div id="task-container" className="default">
            {status === "loading" && <h1>Загрузка задач...</h1>}
            {status === "succeeded" && getSortedTasks(data)}
            {status === "failed" && <h1>{error}</h1>}
        </div>
    );

};