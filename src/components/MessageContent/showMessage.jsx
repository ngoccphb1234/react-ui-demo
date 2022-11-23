import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';

ShowMessage.propTypes = {

};

function ShowMessage(props) {
    return (
        <div className="errorMessage">
            <span>{props.children}</span>
        </div>
    );
}

export default ShowMessage;