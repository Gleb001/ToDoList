// import =================================================== //
// react ---------------------------------------------------- //
import { Route, Outlet, redirect } from "react-router";
// pages ---------------------------------------------------- //
import { TasksPage } from "./tasksPage";
import { TaskEditorPage } from "./taskEditorPage";
import { SettingsPage } from "./settingsPage";
import { ErrorPage } from "./errorPage";
import { RootPage } from "./rootPage";

// main ===================================================== //
export const Routing = () => (
    <>
        <Route path="/*" element={<RootPage />} errorElement={<ErrorPage />} >
            <Route index loader={() => redirect("/tasks")} />
            <Route path="tasks" element={<Outlet />} >
                <Route index element={<TasksPage />} />
                <Route path=":id/edit" element={<TaskEditorPage />} />
            </Route>
            <Route path="settings" element={<SettingsPage />} />
        </Route>
    </>
);