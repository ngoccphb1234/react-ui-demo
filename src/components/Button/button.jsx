import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

Button.propTypes = {
    dataButton: PropTypes.object.isRequired,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    submit: PropTypes.func
};
Button.defaultProps = {
    dataButton: {
        text: 'Button',
        backgroundColor: '#E8E8E8',
        submit: null
    }
}

function Button(dataButton) {
    return (
        <div>
            <button className="buttonDefault" onClick={dataButton.dataButton.submit}
                style={{backgroundColor: dataButton.dataButton.backgroundColor ? dataButton.dataButton.backgroundColor : '#E8E8E8'}}>{dataButton.dataButton.text}</button>
        </div>
    );
}

export default Button;