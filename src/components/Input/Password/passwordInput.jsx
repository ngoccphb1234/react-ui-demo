import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Input from "../input";
import {ErrorMessage} from "formik";
import ShowMessage from "../../MessageContent/showMessage";

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

function PasswordInput(props) {
    const {field, form, type, placeholder, disabled} = props;
    const {name} = field;
    const [showPassword, setShowPassword] = useState(false)

    function handleShowHidePassword() {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <div className="divInputPassword">
                {/*<input type={showPassword ? 'text' : 'password'} value={inputData.inputData.value}*/}
                {/*       onChange={inputData.inputData.onChange} name={inputData.inputData.name}*/}
                {/*       placeholder={inputData.inputData.labelPlaceholder} className="inputPassword"/>*/}
                <input className="inputPassword"
                       id={name}
                       {...field}
                       placeholder={placeholder}
                       disabled={disabled}
                       type={showPassword ? 'text' : 'password'}
                />
                <span onClick={handleShowHidePassword} className="showPasswordTxt">{showPassword ? 'Hide' : 'Show'}</span>
            </div>
            <div className="divErrorMessage">
                <ErrorMessage name={name} component={ShowMessage}></ErrorMessage>
            </div>
        </div>

    );
}

export default PasswordInput;