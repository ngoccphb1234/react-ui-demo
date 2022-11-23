import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

InfoItem.propTypes = {

};

function InfoItem(props) {
    return (
        <div className="parentInfoItem">
            <div className="divItemLeft">
                <img className="imageItem" src="https://img.freepik.com/free-photo/textured-background-white-tone_53876-128610.jpg?w=2000" alt=""/>
            </div>
            <div className="divItemRight">
                <p className="headerRight">
                    <b className="headerTxt">{props.post.author}</b>
                    {/*<b className="headerTxt">{props.post.author}</b>*/}
                    <span className="minutesTxt">8m ago</span>
                    <span className="clear"></span>
                </p>
                <p className="contentTxt">{props.post.title}</p>
                {/*<p className="contentTxt">{props.post.title}</p>*/}
            </div>
        </div>
    );
}

export default InfoItem;