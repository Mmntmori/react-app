import React from 'react';
import style from './Profile.module.css'

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    // let store = props.store;

    return (
        <div className={ style.profile }>
            <ProfileInfo />
            <MyPostsContainer />
        </div>

    )
}

export default Profile