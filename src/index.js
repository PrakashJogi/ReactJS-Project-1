


import "./index.css";
import App from "./App.js";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import ReactDom from "react-dom";   

// ReactDom.render(                                     //Old version code
//     <BrowserRouter>
//         <App />
//         </BrowserRouter> ,        
//             document.getElementById('root'));



const container = document.getElementById('root');       //New version code
const root = createRoot(container);
root.render(
                <App /> 
            );