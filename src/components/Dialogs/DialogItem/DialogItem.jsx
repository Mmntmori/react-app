import React from 'react';
import style from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <img className={style.avatar} src="http://placekitten.com/120/120" alt={props.name}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

export default DialogItem