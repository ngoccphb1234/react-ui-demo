import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

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

function Input(inputData, errors) {
    console.log(errors);
    return (
        <div className="divInput">
            {/*<label className="labelControl">*/}
                <input type="text" value={inputData.inputData.value} onChange={inputData.inputData.onChange} name={inputData.inputData.name} placeholder={inputData.inputData.labelPlaceholder} className="inputControl" />
            {errors.name && <div className="validation" style={{display: 'block'}}>{errors.name}</div>}

            {/*</label>*/}
        </div>
    );
}

export default Input;