import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

import {
    BrowserRouter,
} from "react-router-dom";
import App from "./App";

// import Header from "./components/Header/header";
// import Routers from "./routes/routes";
//
// const listContentHeader = {
//     leftType: '',
//     rightText: 'Sign in',
//     mainText: 'Sign up',
//     leftText: ''
// }
//
// const rootElement = <div className="mainDiv">
//     <div className="contentDiv">
//         <Header listContentHeader={listContentHeader}/>
//         <Routers/>
//     </div>
// </div>


const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
 <React.StrictMode>
     <BrowserRouter>
         <App/>
     </BrowserRouter>
 </React.StrictMode>
);

