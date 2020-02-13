import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className={style.myPostsBlock}>
            <h3>My Posts</h3>
            <div className={style.newPost}>
                <textarea className={style.field}></textarea>
                <button>Add Post</button>
            </div>
            <div className={style.posts}>
                <Post message="ПРИВЕТ Я ТВОЙ ВТОРОЙ ПОСТ" author="КОТЯ"/>

                <Post message="ПРИВЕТ Я ТВОЙ ПЕРВЫЙ ПОСТ" author="КОТЯ"/>
            </div>
        </div>

    )
}

export default MyPosts