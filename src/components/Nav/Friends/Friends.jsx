import React from 'react';
import style from './Friends.module.css'
import { NavLink } from 'react-router-dom';

function Friends(props) {
    let friends = props.friends;
    let friendsElements = friends.map(el => (
        <NavLink to={el.link} className={style.item}>
            <img className={style.avatar} src={el.avatar} alt={el.name}/>
            <p className={style.name}>{el.name}</p>
        </NavLink>)
    )

    return (
        <div className={style.friends}>
            <h2 className={style.title}>Friends</h2>
            <div className={style.list}>
                { friendsElements }
            </div>

        </div>

    )
}

export default Friends