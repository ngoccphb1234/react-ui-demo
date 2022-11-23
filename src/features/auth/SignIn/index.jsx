import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import './styles.css'
import Input from "../../../components/Input/input";
import PasswordInput from "../../../components/Input/Password/passwordInput";
import Button from "../../../components/Button/button";
import Header from "../../../components/Header/header";
import {FastField, Form, Formik} from "formik";

SignInFeature.propTypes = {};


function SignInFeature() {

    const initValues = {
        email: '',
        password: ''
    }

    let validateSchema = yup.object().shape({
        email: yup.string().email().required('email is required.'),
        password: yup.string().required('password  is required.')
    });

    const dataButton = {
        text: 'Log In',
        backgroundColor: '#5DB075'
    }
    const listContentHeader = {
        mainText: 'Log In',
    }
    // const onSubmitHandler = (data) => {
    //     console.log({data});
    // };

    return (
        <Formik
        initialValues={initValues}
        validationSchema={validateSchema}
        onSubmit={values => console.log('values: ', values)}
        >
            {formikProps => {
                // const {values, errors, touched} = formikProps
                return (
                    <div>
                        <Header listContentHeader={listContentHeader}/>
                        <Form>
                            <FastField
                             name="email"
                             component={Input}
                             placeholder="Email"
                            >

                            </FastField>
                            {/*<Input inputData={inputEmail}/>*/}
                            {/*<PasswordInput inputData={inputPassword}/>*/}

                            <FastField
                                name="password"
                                component={PasswordInput}
                                placeholder="Password"
                            >
                            </FastField>
                            <Button dataButton={dataButton}/>
                        </Form>
                        <div className="ForgotPassword">
                            <a href={'http://localhost:3000/'} className="ForgotPasswordLink">Forgot your password?</a>
                        </div>
                    </div>
                )
            }}
        </Formik>

    );
}

export default SignInFeature;