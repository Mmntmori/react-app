import React from 'react';
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className={style.nav}>
            <NavLink to="/profile" className={style.item} activeClassName={style.active}>Profile</NavLink>
            <NavLink to="/dialogs" className={style.item} activeClassName={style.active}>Messages</NavLink>
            <NavLink to="/feed" className={style.item} activeClassName={style.active}>News</NavLink>
            <NavLink to="/music" className={style.item} activeClassName={style.active}>Music</NavLink>
            <NavLink to="/settings" className={style.item} activeClassName={style.active}>Settings</NavLink>
        </nav>
    )
}

export default Nav