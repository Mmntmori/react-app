import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    let postsData = props.profilePage.postsData;
    let newPostText = props.profilePage.newPostText;
    let dispatch = props.dispatch;
    return (
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts postsData={ postsData } 
                     newPostText={ newPostText }
                     dispatch={ dispatch }/>
        </div>

    )
}

export default Profile