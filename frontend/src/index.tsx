// import =================================================== //
// react ---------------------------------------------------- //
import ReactDOM from 'react-dom/client';
import React from "react";
import { Provider } from "react-redux";
// internal ------------------------------------------------- //
import { App } from './app';
import { store } from '@app/redux';

// main ===================================================== //
// @ts-ignore ReactDom.createRoot is experemental
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);