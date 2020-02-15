import React from 'react';
import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.item}>
            <img className={style.image} src="http://placekitten.com/200/250" alt="" />
            <span className={style.author}>{props.author}</span>
            <p className={style.text}>{props.message}</p>
            <div className={style.likeBtn}>{props.likesCount}</div>
        </div>

    )
}

export default Post