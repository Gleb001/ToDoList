// imports =================================================== //
import {store} from ".";

// main ====================================================== //
type RootStore = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
interface initialState<T> {
    data: T,
    status: 'pending' | 'loading' | 'succeeded' | 'failed',
    error: string,
}

// export ==================================================== //
export type { RootStore, AppDispatch, initialState };