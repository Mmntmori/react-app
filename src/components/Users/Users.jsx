import React from 'react';
import style from './Users.module.css'
import * as axios from 'axios';

function Users(props) {

    if (props.usersList.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger    
            props.setUsersList(response.data.items)
        })
    }

    let usersListElements = props.usersList.map(u => (
        <div key={u.id} className={style.user}>
            <div className={style.left}>
                <img src={u.photos.large != null ? u.photos.large : 'https://placekitten.com/200/190'} alt={u.name} className={style.userPicture} />
                <button className={style.userBtn} onClick={u.isFollowed ? () => { props.unfollow(u.id) } : () => { props.follow(u.id) }}>
                    {u.isFollowed ? 'UNFOLLOW' : 'FOLLOW'}
                </button>
            </div>
            <div className={style.right}>
                <div className={style.userName}>{u.name}</div>
                <div className={style.userLocation}>
                    <span className={style.userCountry}>{"u.location.country"}</span>
                    <span className={style.userCity}>{"u.location.city"}</span>
                </div>
                <div className={style.userStatus}>
                    <div className={style.userStatusTitle}>Статус:</div>
                    <div className={style.userStatusBody}>{"u.status"}</div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className={style.usersListBlock}>
            {usersListElements}
        </div>
    )
}

export default Users