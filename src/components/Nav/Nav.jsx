import React from 'react';
import style from './Nav.module.css'

function Nav() {
    return (
        <nav className={style.nav}>
            <a href="#!" className={style.item}>Profile</a>
            <a href="#!" className={style.item}>Messages</a>
            <a href="#!" className={style.item}>News</a>
            <a href="#!" className={style.item}>Music</a>
            <a href="#!" className={style.item}>Settings</a>
        </nav>
    )
}

export default Nav