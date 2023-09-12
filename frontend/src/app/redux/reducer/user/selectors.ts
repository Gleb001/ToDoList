// import =================================================== //
import type { RootStore } from "@app/redux/types";

// main ===================================================== //
export const userSelector = (state: RootStore) => state.user;
export const userThemeSelector = (state: RootStore) => state.user.data.theme;
export const userViewTasksSelector = (state: RootStore) => state.user.data.view_tasks;
export const userIsAutoDeleteAfterCompleteSelector = (state: RootStore) => state.user.data.isAutoDeleteAfterComplete;