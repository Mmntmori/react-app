import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Preloader/Preloader';

function Profile(props) {
    return (
        <div className={ style.profile }>
            { props.profileInfo 
            ? <ProfileInfo profileInfo={ props.profileInfo } profileStatus={ props.profileStatus } updateStatusThunk={ props.updateStatusThunk }/>
            : <Preloader />}
            
            <MyPostsContainer postsData={ props.postsData } newPostText={ props.newPostText } addPost={ props.addPost } onPostChange={ props.updateNewPostText }/>
        </div>
    )
}

export default Profile