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
        leftType: 'button',
        rightText: 'Login',
        mainText: '',
        leftText: 'Back'
    },

}



function Header({listContentHeader}) {
    const [mainText, setMainText] = useState('');

    // if (window.location.pathname === '/login'){
    //     console.log(1);
    // }else if(window.location.pathname === '/register'){
    //     console.log(2)
    // }else {
    //     console.log(3)
    // }

    function handleChangeMainText() {
        setMainText(  'login')
    }

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
                <span className="mainText">{mainText}</span>
            </li>
            <li className="liRight">
              <Link to={'login'} className="txtRightHeader" onClick={handleChangeMainText}>{listContentHeader.rightText}</Link>
            </li>
        </ul>
    </div>
    return (
        element
    );
}

export default Header;