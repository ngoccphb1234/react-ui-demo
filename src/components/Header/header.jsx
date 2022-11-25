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
    pathRedirect: PropTypes.string,

};

Header.defaultProps = {
    listContentHeader: {
        leftType: null,
        rightText: null,
        mainText: '',
        leftText: '',
        pathRedirect: ''
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
                <a href={window.location.host} className="txtLeftHeader">
                    <span className="closeButtonHeader">
            <AiOutlineClose/>
        </span>
                </a>
            </li>

    }
    else if (listContentHeader.leftType === 'link') {
        leftButton = <li className="liLeft"><a className="linkLeft" href="#">
            {listContentHeader.leftText}
        </a>
        </li>
    }
    else {
        leftButton = ''
    }
    let rightTextContent =
        <li className="liRight">
        <Link to={listContentHeader.pathRedirect} className="txtRightHeader">{listContentHeader.rightText}</Link>
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