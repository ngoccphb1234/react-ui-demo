import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

Button.propTypes = {
    dataButton: PropTypes.object.isRequired,
    text: PropTypes.string,
    backgroundColor: PropTypes.string
};
Button.defaultProps = {
    dataButton: {
        text: 'Button',
        backgroundColor: '#E8E8E8'
    }
}

function Button(dataButton) {
    return (
        <div>
            <button className="buttonDefault" onClick={() => {}}
                style={{backgroundColor: dataButton.dataButton.backgroundColor ? dataButton.dataButton.backgroundColor : '#E8E8E8'}}>{dataButton.dataButton.text}</button>
        </div>
    );
}

export default Button;