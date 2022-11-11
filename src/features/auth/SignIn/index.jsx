import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import Input from "../../../components/Input/input";
import PasswordInput from "../../../components/Input/Password/passwordInput";
import Button from "../../../components/Button/button";
import Header from "../../../components/Header/header";

SignInFeature.propTypes = {

};

function SignInFeature() {
    const inputEmail = {
        labelPlaceholder: 'Email',
        name: 'email'
    }
    const inputPassword = {
        labelPlaceholder: 'Password',
        name: 'password'
    }
    const dataButton = {
        text: 'Log In',
        backgroundColor: '#5DB075'
    }
    const listContentHeader = {
        mainText: 'Log In',
    }
    return (
        <div>
            <Header listContentHeader={listContentHeader}/>
            <form action="#">
                <Input inputData={inputEmail}/>
                <PasswordInput  inputData={inputPassword}/>
                <Button dataButton={dataButton}/>
            </form>
            <div className="ForgotPassword">
                <a href={'http://localhost:3000/'} className="ForgotPasswordLink">Forgot your password?</a>
            </div>
        </div>
    );
}

export default SignInFeature;