import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Header from "../../components/Header/header";
import Search from "../../components/Search";
import InfoItem from "../../components/InfoItem/InfoItem";
import axios from "axios";

FeedFeature.propTypes = {};

function FeedFeature(props) {

    const listContentHeader = {
        mainText: 'Feed',
        leftType: 'link',
        rightText: 'Filter',
        leftText: 'Back'
    }
    const [postList, setPostList] = useState([]);
                const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';

    useEffect(() => {
        return () => {
            axios.get(requestUrl)
                .then(res => {
                    const postList = res.data.data;
                   setPostList(postList);
                })
                .catch(error => console.log(error));
        };
    }, []);


    // useEffect(() => {
    //     async function fetchPostList() {
    //         try {
    //             const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
    //             const response = await fetch(requestUrl);
    //             // fetch(requestUrl)
    //             //     .then((response) => response.json())
    //             //     .then((json) => setPostList(json));
    //             // response.json().then(data => setPostList(data));
    //             const responseJSON = await response.json();
    //             const {data} = responseJSON;
    //             setPostList(data);
    //         } catch (error) {
    //             console.log('failed get post list.')
    //         }
    //
    //     }
    //
    //     fetchPostList().then(r => r);
    // }, []);


    console.log(postList);
    let itemsInfo = [];
    for (let i = 0; i < postList.length; i++) {
        itemsInfo.push(<InfoItem key={i} post={postList[i]}/>)
    }
    return (
        <div className="feed">
            <Header listContentHeader={listContentHeader}/>
            <Search/>
            {itemsInfo}
        </div>
    );
}

export default FeedFeature;