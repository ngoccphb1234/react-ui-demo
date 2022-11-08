import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginFeature from "./features/auth/login";
import Header from "./components/Header/header";


const element = <div className="mainDiv">
    <div className="contentDiv">
        <Header/>
        <LoginFeature/>
        <p>376x812px</p>
    </div>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
