import React from 'react';
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="http://placekitten.com/900/900" alt=""/>
            </div>
        </header>
    )
}

export default Header