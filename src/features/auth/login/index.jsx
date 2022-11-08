import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import Input from "../../../components/Input/input";
import PasswordInput from "../../../components/Input/Password/passwordInput";
import Button from "../../../components/Button/button";

LoginFeature.propTypes = {

};

function LoginFeature() {
    const inputName = {
        labelPlaceholder: 'Name',
        name: 'name'
    }
    const inputEmail = {
        labelPlaceholder: 'Email',
        name: 'email'
    }
    const inputPassword = {
        labelPlaceholder: 'Password',
        name: 'password'
    }
    const dataButton = {
        text: 'Sign Up',
        backgroundColor: '#5DB075'
    }
    return (
        <div>
            <form action="#">
                <Input inputData={inputName}/>
                <Input inputData={inputEmail}/>
                <PasswordInput  inputData={inputPassword}/>
                <div className="divInlineParent">
                    <div className="divInlineLeft">
                        <input className="checkBoxLogin" type="checkbox"/>
                    </div>
                    <div className="divInlineRight">
                        <span className="txtCheckboxLogin">I would like to receive your newsletter and other promotional information.</span>
                    </div>
                </div>
                <Button dataButton={dataButton}/>
            </form>
            <div className="ForgotPassword">
                <a href={'http://localhost:3000/'} className="ForgotPasswordLink">Forgot your password?</a>
            </div>
        </div>
    );
}

export default LoginFeature;