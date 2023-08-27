// import =================================================== //
import type {RootStore} from "@app/redux/types";

// main ===================================================== //
export const activeTaskSelector = (state: RootStore) => state.active_task;