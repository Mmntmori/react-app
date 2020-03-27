import React from 'react';
import style from './Users.module.css';
import Preloader from '../Preloader/Preloader';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let paginationElements = pages.map(e => {
        return <button onClick={() => props.onPageChange(e)} className={`${style.userBtn} ${style.paginationBtn} ${props.currentPage === e ? style.paginationActiveBtn : ''}`} id={'page' + e} key={'page' + e}>{e}</button>
    })

    let usersListElements = props.usersList.map(u => (
        <div key={u.id} className={style.user}>
            <div className={style.left}>
                <img src={u.photos.large != null ? u.photos.large : 'https://placekitten.com/200/200'} alt={u.name} className={style.userPicture} />
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
            <div className={style.pagination}>
                { paginationElements }
            </div>
            { props.isLoading ? <Preloader/> : null}


            { props.isLoading ? null : usersListElements }
        </div>
    )

}

export default Users