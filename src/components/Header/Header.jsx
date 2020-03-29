import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
    console.log(props);

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="http://placekitten.com/900/900" alt="" />
            </div>
            <div className={style.authBlock}>
                {!props.isLoggedIn ?
                    <div className={style.loginLink}>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                    :
                    <div className={style.authInfo}>
                        <span className={style.text}>Вы залогинены как: 
                        </span>
                        <NavLink className={style.profileLink} to={ `/profile/${ props.userId }` }>{props.login}</NavLink>
                        <span className={style.text}>Ваш email: {props.email}</span>
                        <span className={style.text}>Ваш ID: {props.userId}</span>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header