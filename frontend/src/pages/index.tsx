// import =================================================== //
// react ---------------------------------------------------- //
import React from "react";
import { Route, Routes, Outlet, redirect } from "react-router";
// pages ---------------------------------------------------- //
import { TasksPage } from "./tasksPage";
import { TaskEditorPage } from "./taskEditorPage";
// internal ------------------------------------------------- //
import { SettingsPage } from "./settingsPage";
import { ErrorPage } from "./errorPage";

// main ===================================================== //
export const Routing = () => (
    <>
        <Route path="/*" element={<Outlet />} errorElement={<ErrorPage />} >
            <Route index loader={() => redirect("/tasks")} />
            <Route path="tasks" element={<Outlet />} >
                <Route index element={<TasksPage />} />
                <Route path="change" element={<TaskEditorPage />} />
            </Route>
            <Route path="settings" element={<SettingsPage />} />
        </Route>
    </>
);