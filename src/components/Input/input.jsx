import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import {ErrorMessage} from "formik";
import ShowMessage from "../MessageContent/showMessage";

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool

};

Input.defaultProps = {
    placeholder: '',
    name: '',
    type: 'text',
    disabled: false
}

function Input(props) {
    const {field, form, type, placeholder, disabled} = props;
    const {name} = field;
    // const {errors, touched} = form;
    // const showError = errors[name] && touched[name]
    return (
        <div>
        <div className="divInput">
            <input className="inputControl"
                   id={name}
                   {...field}
                   type={type}
                   disabled={disabled}
                   placeholder={placeholder}

            />
        </div>
            <div className="divErrorMessage">
                <ErrorMessage name={name} component={ShowMessage}></ErrorMessage>
            </div>
        </div>
    );
}

export default Input;