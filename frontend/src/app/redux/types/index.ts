// imports =================================================== //
import {store} from "..";

// main ====================================================== //
type RootStore = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
type Status = 'pending' | 'loading' | 'succeeded' | 'failed'
type Error = string
interface initialState<T> {
    data: T,
    status: Status,
    error: Error,
}

// export ==================================================== //
export type {
    RootStore,
    AppDispatch,
    initialState,
    Status,
    Error
};