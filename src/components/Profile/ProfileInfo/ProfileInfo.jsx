import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={style.info}>
            <div className={style.banner}>
                <img src="http://placekitten.com/1200/800" alt="" />
            </div>
            <div className={style.descriptionBlock}>
                Ava + describtion
            </div>
        </div>
    )
}

export default ProfileInfo