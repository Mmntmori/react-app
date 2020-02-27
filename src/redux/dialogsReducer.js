const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
      SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Котик 1', avatar: 'http://placekitten.com/120/110' },
        { id: 2, name: 'Котик 2', avatar: 'http://placekitten.com/120/120' },
        { id: 3, name: 'Котик 3', avatar: 'http://placekitten.com/110/110' },
        { id: 4, name: 'Котик 4', avatar: 'http://placekitten.com/120/130' }
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How r you?' },
        { id: 3, message: 'i\'m fine. and u? xoxo' },
        { id: 4, message: 'wow, u\'r cute' }
    ],
    newMessageText: 'New Message'
};

const dialogsReducer = (state = initialState, action) => {

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