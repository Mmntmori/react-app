import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';


function Dialogs(props) {

    let dialogsData = props.dialogsPage.dialogsData,
        messagesData = props.dialogsPage.messagesData,

        dialogsElements = dialogsData.map(el => (<DialogItem key={el.id}
            name={el.name}
            id={el.id}
            avatar={el.avatar} />));

    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessageText);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <MessageWindowReduxForm onSubmit={onSubmit} messagesData={messagesData} />
        </div>
    )
}

function MessageWindow(props) {

    let messagesElements = props.messagesData.map(el => (<Message key={el.id}
        id={el.id}
        message={el.message} />));

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.messagesList}>
                <div className={style.messagesItems}>{messagesElements}</div>
                <Field component='textarea' name='newMessageText' className={style.field} />
                <button className={style.btn}>Отправить</button>
            </div>
        </form>

    )
}

const MessageWindowReduxForm = reduxForm({ form: 'messageWindowForm' })(MessageWindow);




export default Dialogs