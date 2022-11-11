import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './styles.scss'
import {AiOutlineClose} from "react-icons/ai";

Header.propTypes = {
    listContentHeader: PropTypes.object.isRequired,
    mainText: PropTypes.string,
    leftText: PropTypes.string,
    leftType: PropTypes.string,

};

Header.defaultProps = {
    listContentHeader: {
        leftType: null,
        rightText: null,
        mainText: '',
        leftText: ''
    },

}


function Header({listContentHeader}) {


    let leftButton = ''
    if (listContentHeader.leftType === 'text') {
        leftButton = <li className="liLeft"><span>
            {listContentHeader.leftText}
        </span>
        </li>
    } else if (listContentHeader.leftType === 'button') {

        leftButton =
            <li className="liLeft">
                <a href={'http://localhost:3000/'} className="txtLeftHeader">
                    <span className="closeButtonHeader">
            <AiOutlineClose/>
        </span>
                </a>
            </li>

    } else {
        leftButton = ''
    }

    let rightTextContent =
        <li className="liRight">
        <Link to={'sign-in'} className="txtRightHeader">{listContentHeader.rightText}</Link>
    </li>

    return (
        <div className="v-effect-link">
            <ul>
                {leftButton ? leftButton: ''}

                <li className="liMainText">
                    <span className="mainText">{listContentHeader.mainText}</span>
                </li>
                {listContentHeader.rightText ? rightTextContent : ''}
            </ul>
        </div>
    );
}

export default Header;