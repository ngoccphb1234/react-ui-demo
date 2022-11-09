import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

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

function Input(inputData) {
    console.log(inputData)
    return (
        <div className="divInput">
            {/*<label className="labelControl">*/}
                <input type="text" name={inputData.inputData.name} placeholder={inputData.inputData.labelPlaceholder} className="inputControl" />
            {/*</label>*/}
        </div>
    );
}

export default Input;