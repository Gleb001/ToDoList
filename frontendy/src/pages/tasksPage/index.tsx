// import  ================================================ //
import { TaskEditor } from "@widgets/taskEditor";
import TaskManager from "../../widgets/taskContainer/index";
import React, { FC } from "react";
import { useAppSelector } from "@shared/hooks/useAppSelector";

// main =================================================== //
let TasksPage: FC<{}> = ({ }) => {

    let taskIndex = useAppSelector(state => state.active_task);

    return (
        <>
            {taskIndex !== -1 && <TaskEditor  indexTask={taskIndex}/>}
            <TaskManager />
        </>
    );
};

// export ================================================= //
export default TasksPage;