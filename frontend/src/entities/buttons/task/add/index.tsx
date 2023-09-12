// import =================================================== //
// react ---------------------------------------------------- //
import type { FC } from "react";
import { useNavigate } from "react-router";
// redux ---------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { postListTasks } from "@app/redux/reducer/task";
// components ----------------------------------------------- //
import { Button } from "@shared/components/button";
// internal ------------------------------------------------- //
import { CreateTask } from "./helpers/createTask";

// main ===================================================== //
export const ButtonAddTask: FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleClick() {
        const new_task = CreateTask();
        dispatch(
            postListTasks(new_task)
        );
        navigate("/tasks/" + new_task.id + "/edit");
    }

    return (
        <Button
            className="button-add-task"
            onClick={handleClick}
        >
            Добавить
        </Button>
    );

}