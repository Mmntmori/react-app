import React from 'react';
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

function Dialogs(props) {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Котик 1' id='1' />
                <DialogItem name='Котик 2' id='2' />
                <DialogItem name='Котик 3' id='3' />
                <DialogItem name='Котик 4' id='4' />
                <DialogItem name='Котик 5' id='5' />
                <DialogItem name='Котик 6' id='6' />
                <DialogItem name='Котик 7' id='7' />
                <DialogItem name='Котик 8' id='8' />
                <DialogItem name='Котик 9' id='9' />
            </div>
            <div className={style.messages}>
                <Message message="Hi" />
                <Message message="How r you?" />
                <Message message="i'm fine. and u? xoxo" />
            </div>
        </div>
    )
}

export default Dialogs