import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


function Dialogs(props) {
    let dialogsData = props.dialogsPage.dialogsData;
    let messagesData = props.dialogsPage.messagesData;

    let dialogsElements = dialogsData.map(el => (<DialogItem key={el.id} name={el.name} id={el.id} />));
    let messagesElements = messagesData.map(el => (<Message key={el.id} id={el.id} message={el.message} />))

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs