import React from 'react';
import style from './Users.module.css';
import Preloader from '../Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    // console.log(props);
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let paginationElements = pages.map(e => {
        return <button onClick={() => props.onPageChange(e)} className={`${style.userBtn} ${style.paginationBtn} ${props.currentPage === e ? style.paginationActiveBtn : ''}`} id={'page' + e} key={'page' + e}>{e}</button>
    })

    // const unfollowUser = function(userId) {
    //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
    //         withCredentials: true,
    //         headers: {
    //             'API-KEY': '3b1c335e-d74d-4d0f-9f07-315ffb4de9e5'
    //         }
    //     }).then(response => {
    //         if (response.data.resultCode === 0) {
    //             props.unfollow(userId)
    //         }
    //     })
    // }
    // const followUser = function(userId) {
    //     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, null, {
    //         withCredentials: true,
    //         headers: {
    //             'API-KEY': '3b1c335e-d74d-4d0f-9f07-315ffb4de9e5'
    //         }
    //     }).then(response => {
    //         if (response.data.resultCode === 0) {
    //             props.follow(userId)
    //         }
    //     })
    // }

    let usersListElements = props.usersList.map(u => (
        <div key={u.id} className={style.user} id={u.id}>
            <div className={style.left}>
                <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.large !== null ? u.photos.large : 'https://placekitten.com/200/200'} alt={u.name} className={style.userPicture} />
                </NavLink>
                {u.followed ? 
                <button className={style.userBtn} onClick={() => { props.unfollowUser(u.id) }}>
                    UNFOLLOW
                </button>
                :
                <button className={style.userBtn} onClick={() => { props.followUser(u.id) }}>
                    FOLLOW
                </button>

                }
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
            <div className={style.pagination}>
                {paginationElements}
            </div>
            {props.isLoading ? <Preloader /> : null}
            <div>
                {props.isLoading ? null : usersListElements}
            </div>
        </div>
    )

}

export default Users