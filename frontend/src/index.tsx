// import ================================================= //
import ReactDOM from 'react-dom/client';
import React from "react";

import "./assets/styles/index.css";
import App from './App';

// main =================================================== //
const HTML_ROOT = document!.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(HTML_ROOT);
root.render(<App />);