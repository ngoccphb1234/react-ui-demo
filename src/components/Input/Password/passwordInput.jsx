import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Input from "../input";

Input.propTypes = {
    inputData: PropTypes.object.isRequired,
    labelPlaceholder: PropTypes.string,
    name: PropTypes.string
};

Input.defaultProps = {
    inputData: {
        labelPlaceholder: '',
        name: ''
    }
}

function PasswordInput(inputData) {
    return (
        <label className="labelControl">
            <input type="password" name={inputData.inputData.name} placeholder={inputData.inputData.labelPlaceholder} className="inputControl" />
            <span className="showPasswordTxt">Show</span>
        </label>
    );
}

export default PasswordInput;