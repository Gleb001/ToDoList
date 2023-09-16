// import =================================================== //
// react ---------------------------------------------------- //
import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import { Provider } from "react-redux";
// internal ------------------------------------------------- //
import { App } from './app';
import { store } from '@app/redux';

// main ===================================================== //
// @ts-ignore ReactDom.createRoot is experemental
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    // </StrictMode>
);