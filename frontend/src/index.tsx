// import ================================================= //
import "./index.css";
import ReactDOM from 'react-dom/client';
import App from './App';

// main =================================================== //
const HTML_ROOT = document!.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(HTML_ROOT);
root.render(<App />);