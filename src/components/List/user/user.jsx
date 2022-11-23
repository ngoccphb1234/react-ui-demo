import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
User.propTypes = {

};

function User(props) {
    return (
        <div>
            <ul>
                {props.users.reduce()}
            </ul>
        </div>
    );
}

export default User;