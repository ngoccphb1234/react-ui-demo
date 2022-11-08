import React from 'react';
import PropTypes from 'prop-types';
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
        leftType: 'button',
        rightText: 'Login',
        mainText: 'Sign Up',
        leftText: 'Back'
    },

}

function Header({listContentHeader}) {
    let leftButton  = ''
    if (listContentHeader.leftType === 'text') {
        leftButton = <span>
            {listContentHeader.leftText}
        </span>
    } else if (listContentHeader.leftType === 'button') {

        leftButton = <span className="closeButtonHeader">
            <AiOutlineClose/>
        </span>
    }else {
        leftButton = ''
    }

    const element =
        <div className="v-effect-link">
        <ul>
            <li className="liLeft">
               <a href={'http://localhost:3000/'} className="txtLeftHeader">{leftButton}</a>
            </li>
            <li className="liMainText">
                <span className="mainText">{listContentHeader.mainText}</span>
            </li>
            <li className="liRight">
              <a href={'http://localhost:3000/'} className="txtRightHeader">{listContentHeader.rightText}</a>
            </li>
        </ul>
    </div>
    return (
        element
    );
}

export default Header;