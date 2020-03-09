import React from 'react';
import style from './Users.module.css'

function Users(props) {
    let usersListElements = props.usersList.map(u => (
        <div key={u.id} className={ style.user }>
            <div className={ style.left}>
                <img src={ u.userPicture } alt={ u.fullName } className={ style.userPicture }/>
                <button className={ style.userBtn } onClick={ u.isFollowed ? () => {props.unfollow(u.id)} : () => {props.follow(u.id)} }>
                    { u.isFollowed ? 'UNFOLLOW' : 'FOLLOW' }
                </button>
            </div>
            <div className={ style.right }>
                <div className={ style.userName }>{ u.fullName }</div>
                <div className={ style.userLocation }>
                    <span className={ style.userCountry }>{ u.location.country }</span>
                    <span className={ style.userCity }>{ u.location.city }</span>
                </div>
                <div className={style.userStatus }>
                    <div className={ style.userStatusTitle }>Статус:</div>
                    <div className={ style.userStatusTitle }>{ u.status }</div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className={ style.usersListBlock }>
            { usersListElements }
        </div>
    )
}

export default Users