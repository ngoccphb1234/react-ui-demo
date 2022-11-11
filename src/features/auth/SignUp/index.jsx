import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
import './styles.css'
import Input from "../../../components/Input/input";
import PasswordInput from "../../../components/Input/Password/passwordInput";
import Button from "../../../components/Button/button";
import Header from "../../../components/Header/header";

SignUpFeature.propTypes = {};

function SignUpFeature() {
    const inputName = {
        labelPlaceholder: 'Name',
        name: 'name',
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
        backgroundColor: '#5DB075',
        handleSubmit: null
    }
    const listContentHeader = {
        leftType: 'button',
        rightText: 'Login',
        mainText: 'Sign Up',
    }

    const [signUp, setSignUp] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    );

    const [errors, setErrors] = useState([]);

    function handleInput(e) {
        const value = e.target.value;
        const nameTarget = e.target.name;
        switch (nameTarget) {
            case 'name':
                setSignUp({
                    ...signUp,
                    name: value,
                });
                break;
            case 'email':
                setSignUp({
                    ...signUp,
                    email: value,
                });
                break;
            case 'password':
                setSignUp({
                    ...signUp,
                    password: value,
                });
                break;
            default:
                console.log('this is default case')

        }

    }
    function validate(name, email, password) {
        // we are going to store errors for all fields
        // in a signle array
        const errors = [];

        if (name.length === 0) {
            errors.push("Name can't be empty");
        }

        if (email.length < 5) {
            errors.push("Email should be at least 5 charcters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
            errors.push("Email should contain a @");
        }
        if (email.indexOf(".") === -1) {
            errors.push("Email should contain at least one dot");
        }

        if (password.length < 6) {
            errors.push("Password should be at least 6 characters long");
        }

        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const {name, email, password} = signUp;

        const errors = validate(name, email, password);
        if (errors.length > 0) {
           setErrors(errors);
        }
    }

    return (
        <div>
            <Header listContentHeader={listContentHeader}/>
            <ul>
                {
                    errors.map((error) =>
                        <li  key={errors.indexOf(error)}>{error}</li>
                    )
                }
            </ul>
            <form action="#">
                <Input inputData={
                    {
                        'labelPlaceholder': 'Name',
                        'name': 'name',
                        'value': signUp.name,
                        'onChange': handleInput
                    }
                }/>
                <Input inputData={{
                    'labelPlaceholder': 'Email',
                    'name': 'email',
                    'value': signUp.email,
                    'onChange': handleInput
                }} errors={errors}/>
                <PasswordInput inputData={{
                    'labelPlaceholder': 'Password',
                    'name': 'password',
                    'value': signUp.password,
                    'onChange': handleInput
                }} errors={errors} />
                <div className="divInlineParent">
                    <div className="divInlineLeft">
                        <input className="checkBoxLogin" type="checkbox"/>
                    </div>
                    <div className="divInlineRight">
                        <span className="txtCheckboxLogin">I would like to receive your newsletter and other promotional information.</span>
                    </div>
                </div>
                <Button dataButton={{
                    text: 'Sign Up',
                    backgroundColor: '#5DB075',
                    submit: handleSubmit
                }}/>
            </form>
            <div className="ForgotPassword">
                <a href={'http://localhost:3000/'} className="ForgotPasswordLink">Forgot your password?</a>
            </div>
        </div>
    );
}

export default SignUpFeature;