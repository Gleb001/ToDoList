// import  ================================================ //
import NameApp from "../modules/name_app(-)/index";
import TaskManager from "../modules/task_manager/index";
import React from "react";

// main =================================================== //
export default function UserPage(props: {}) {
    return (
        <>
            <NameApp />
            <TaskManager />
        </>
    );
}