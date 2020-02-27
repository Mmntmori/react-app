const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
      SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageId = state.messagesData[state.messagesData.length - 1].id + 1;
            let newMessage = {
                id: newMessageId,
                message: state.newMessageText
            }

            state.newMessageText ? state.messagesData.push(newMessage) : alert('Введите сообщение')
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default: return state;
    }
}

export const updateNewMessageTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}


export default dialogsReducer;