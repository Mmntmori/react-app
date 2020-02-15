import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    let postsData = props.postsData

    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts postsData={postsData}/>
        </div>

    )
}

export default Profile