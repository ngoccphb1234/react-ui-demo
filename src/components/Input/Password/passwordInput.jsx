import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Input from "../input";

Input.propTypes = {
    inputData: PropTypes.object.isRequired,
    labelPlaceholder: PropTypes.string,
    name: PropTypes.string,
    errors: PropTypes.array,
};

Input.defaultProps = {
    inputData: {
        labelPlaceholder: '',
        name: '',
        value: '',
        onChange: null
    },
    errors: []
}

function PasswordInput(inputData, errors) {
    const [showPassword, setShowPassword] = useState(false)

    function handleShowHidePassword() {
        setShowPassword(!showPassword)
    }

    return (
        <div className="divInputPassword">
            <input type={showPassword ? 'text' : 'password'} value={inputData.inputData.value}
                   onChange={inputData.inputData.onChange} name={inputData.inputData.name}
                   placeholder={inputData.inputData.labelPlaceholder} className="inputPassword"/>
            <span onClick={handleShowHidePassword} className="showPasswordTxt">{showPassword ? 'Hide' : 'Show'}</span>
        </div>
    );
}

export default PasswordInput;