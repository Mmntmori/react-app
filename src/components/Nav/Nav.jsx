import React from 'react';
import style from './Nav.module.css'

function Nav() {
    return (
        <nav className={style.nav}>
            <a href="/profile" className={style.item}>Profile</a>
            <a href="/dialogs" className={style.item}>Messages</a>
            <a href="/feed" className={style.item}>News</a>
            <a href="/music" className={style.item}>Music</a>
            <a href="/settings" className={style.item}>Settings</a>
        </nav>
    )
}

export default Nav