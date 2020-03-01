import React from 'react';
import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';


function DialogsContainer(props) {
    let state = props.store.getState();
    let dialogsPage = state.dialogsPage;
    let dispatch = props.store.dispatch.bind(props.store);

    let onMessageChange = (text) => {
        dispatch(updateNewMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        dispatch(sendMessageActionCreator());
    }

    return (<Dialogs onMessageChange={ onMessageChange } sendMessage={ sendMessage } dialogsPage={ dialogsPage }/>)
}

export default DialogsContainer