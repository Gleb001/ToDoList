// import =================================================== //
import type {RootStore} from "@app/redux/types";

// main ===================================================== //
export const taskSelector = (state: RootStore) => state.tasks;