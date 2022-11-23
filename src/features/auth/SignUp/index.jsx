import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
import './styles.css'
import Input from "../../../components/Input/input";
import PasswordInput from "../../../components/Input/Password/passwordInput";
import Button from "../../../components/Button/button";
import Header from "../../../components/Header/header";
import {FastField, Form, Formik} from "formik";
import * as yup from "yup";

SignUpFeature.propTypes = {};

function SignUpFeature() {
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

    const initValues = {
        name: '',
        email: '',
        password: ''
    }

    let validateSchema = yup.object().shape({
        name: yup.string().required('name is required.'),
        email: yup.string().email().required('email is required.'),
        password: yup.string().required('password  is required.')
    });

    // const [signUp, setSignUp] = useState(
    //     {
    //         name: '',
    //         email: '',
    //         password: ''
    //     }
    // );


    // function handleInput(e) {
    //     const value = e.target.value;
    //     const nameTarget = e.target.name;
    //     switch (nameTarget) {
    //         case 'name':
    //             setSignUp({
    //                 ...signUp,
    //                 name: value,
    //             });
    //             break;
    //         case 'email':
    //             setSignUp({
    //                 ...signUp,
    //                 email: value,
    //             });
    //             break;
    //         case 'password':
    //             setSignUp({
    //                 ...signUp,
    //                 password: value,
    //             });
    //             break;
    //         default:
    //             console.log('this is default case')
    //
    //     }
    //
    // }
    // function validate(name, email, password) {
    //     // we are going to store errors for all fields
    //     // in a signle array
    //     const errors = [];
    //
    //     if (name.length === 0) {
    //         errors.push("Name can't be empty");
    //     }
    //
    //     if (email.length < 5) {
    //         errors.push("Email should be at least 5 charcters long");
    //     }
    //     if (email.split("").filter(x => x === "@").length !== 1) {
    //         errors.push("Email should contain a @");
    //     }
    //     if (email.indexOf(".") === -1) {
    //         errors.push("Email should contain at least one dot");
    //     }
    //
    //     if (password.length < 6) {
    //         errors.push("Password should be at least 6 characters long");
    //     }
    //
    //     return errors;
    // }

    function handleSubmit(e) {
        console.log(e)
        // e.preventDefault();
        // const {name, email, password} = signUp;

        // const errors = validate(name, email, password);
        // if (errors.length > 0) {
        //    setErrors(errors);
        // }
    }

    return (
        <Formik
        initialValues={initValues}
        validationSchema={validateSchema}
        onSubmit={values => console.log('values: ', values)}
        >
            {formikProps => {
                return (
                    <div>
                        <Header listContentHeader={listContentHeader}/>
                        <Form>
                            <FastField
                                name="name"
                                component={Input}
                                placeholder="Name"
                            >
                            </FastField>
                            <FastField
                                name="email"
                                component={Input}

                                placeholder="Email"
                            >
                            </FastField>
                            <FastField
                                name="password"
                                component={PasswordInput}
                                placeholder="Password"
                            >
                            </FastField>
                            <div className="divInlineParent">
                                <div className="divInlineLeft">
                                    <input className="checkBoxLogin" type="checkbox"/>
                                </div>
                                <div className="divInlineRight">
                                    <span className="txtCheckboxLogin">I would like to receive your newsletter and other promotional information.</span>
                                </div>
                            </div>
                            <Button dataButton={dataButton}/>
                        </Form>
                        <div className="ForgotPassword">
                            <a href={'http://localhost:3000/'} className="ForgotPasswordLink">Forgot your password?</a>
                        </div>
                    </div>
                );
            }}
        </Formik>
    )

}

export default SignUpFeature;