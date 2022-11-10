import React from 'react';
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';

import Header from "./components/Header/header";
import SignUpFeature from "./features/auth/SignUp";
import SignInFeature from "./features/auth/SignIn";

const listContentHeader = {
    leftType: '',
    rightText: 'Sign in',
    mainText: 'Sign up',
    leftText: ''
}


const rootElement = <div className="mainDiv">
    <div className="contentDiv">
        <Header listContentHeader={listContentHeader}/>
        <Routes>
            <Route path="register" element={<SignUpFeature/>} />
            <Route path="login" element={<SignInFeature/>} />
        </Routes>
        {/*<SignInFeature/>*/}
    </div>
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
     <BrowserRouter>
         {rootElement}
     </BrowserRouter>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
