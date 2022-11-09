import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header/header";
import SignUpFeature from "./features/auth/SignUp";
import SignInFeature from "./features/auth/SignIn";

const listContentHeader = {
    leftType: '',
    rightText: '',
    mainText: 'Log In',
    leftText: ''
}

const element = <div className="mainDiv">
    <div className="contentDiv">
        <Header listContentHeader={listContentHeader}/>
        {/*<SignUpFeature/>*/}
        <SignInFeature/>
    </div>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
