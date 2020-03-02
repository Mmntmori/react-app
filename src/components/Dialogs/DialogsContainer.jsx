import React from 'react';
import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';


function DialogsContainer(props) {
    // let state = props.store.getState();
    // let dialogsPage = state.dialogsPage;
    // let dispatch = props.store.dispatch.bind(props.store);

    // let onMessageChange = (text) => {
    //     dispatch(updateNewMessageTextActionCreator(text));
    // }

    // let sendMessage = () => {
    //     dispatch(sendMessageActionCreator());
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let dialogsPage = state.dialogsPage;
                    let dispatch = store.dispatch.bind(store);

                    let onMessageChange = (text) => {
                         dispatch(updateNewMessageTextActionCreator(text));
                    }
    
                    let sendMessage = () => {
                        dispatch(sendMessageActionCreator());
                    }
                    return (
                        <Dialogs onMessageChange={onMessageChange} sendMessage={sendMessage} dialogsPage={dialogsPage} />
                    )
                }
           }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer