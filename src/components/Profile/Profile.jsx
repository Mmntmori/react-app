import React from 'react';
import style from './Profile.module.css'
import MyPosts from '../MyPosts/MyPosts'

function Profile() {
    return (
        <div className={style.profile}>
            <div className={style.banner}>
                <img src="http://placekitten.com/1200/800" alt=""/>
            </div>
            <div>
                Ava + describtion
            </div>
            <MyPosts />

        </div>

    )
}

export default Profile