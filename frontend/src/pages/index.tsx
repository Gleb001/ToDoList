// imports
import { FC } from "react";
import React from "react";
import { Route, Routes, Outlet } from "react-router";
import TasksPage from "./tasksPage";

// main
let Routing: FC<{}> = ({}) => (
    <Routes>
        <Route path="/" element={<Outlet />}>
            <Route index element={<TasksPage />} />
        </Route>
    </Routes>
);

// export
export default Routing;