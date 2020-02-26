import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/state';


function Dialogs(props) {
    let dialogsData = props.dialogsPage.dialogsData;
    let messagesData = props.dialogsPage.messagesData;
    let newMessageText = props.dialogsPage.newMessageText;
    let dispatch = props.dispatch;

    let dialogsElements = dialogsData.map(el => (<DialogItem key={el.id} name={el.name} id={el.id} />));
    let messagesElements = messagesData.map(el => (<Message key={el.id} id={el.id} message={el.message} />))

    let newMessageElement = React.createRef();

    // let onMessageChange = () => {
    //     dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value))
    // }

    let onMessageChange = (e) => {
        dispatch(updateNewMessageTextActionCreator( e.target.value));
    }

    let sendMessage = () => {
        dispatch(sendMessageActionCreator())
    }

    return (
        <div className={ style.dialogs }>
            <div className={ style.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ style.messagesList }>
                <div className={ style.messagesItems }>{ messagesElements }</div>
                <textarea ref={ newMessageElement }
                          value={ newMessageText }
                          onChange={ onMessageChange }
                          className={ style.field }/>
                <button onClick={ sendMessage } 
                        className={ style.btn }>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs