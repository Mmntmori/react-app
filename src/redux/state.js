let store = {
    _state: {
        sideBar: {
            friendsData: [
                {
                    name: 'Котик 1',
                    link: '',
                    avatar: 'http://placekitten.com/120/130'
                }, {
                    name: 'Котик 2',
                    link: '',
                    avatar: 'http://placekitten.com/130/130'
                }, {
                    name: 'Котик 3',
                    link: '',
                    avatar: 'http://placekitten.com/120/120'
                }
            ]
        },

        profilePage: {
            postsData: [
                { id: 1, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ПЕРВЫЙ ПОСТ', likesCount: '4' },
                { id: 2, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ВТОРОЙ ПОСТ', likesCount: '9' },
                { id: 3, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ТРЕТИЙ ПОСТ', likesCount: '22' },
                { id: 4, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ЧЕТВЁРТЫЙ ПОСТ', likesCount: '12' }
            ],
            newPostText: 'New text'
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Котик 1' },
                { id: 2, name: 'Котик 2' },
                { id: 3, name: 'Котик 3' },
                { id: 4, name: 'Котик 4' }
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How r you?' },
                { id: 3, message: 'i\'m fine. and u? xoxo' },
                { id: 4, message: 'wow, u\'r cute' }
            ],
            newMessageText: 'New Message'
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    }
    ,
    addPost() {
    },
    sendMessage() {
    },
    updateNewPostText(newText) {
    },

    updateNewMessageText(newText) {
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    author: 'Котик',
                    text: this._state.profilePage.newPostText,
                    likesCount: '0'
                }
                this._state.profilePage.newPostText ? this._state.profilePage.postsData.push(newPost) : alert('ПОШЕЛ ТЫ НАХЕР, КОЗЕЛ');
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case 'SEND-MESSAGE':
                let newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.newMessageText ? this._state.dialogsPage.messagesData.push(newMessage) : alert('Введите сообщение')
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;

            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;
        }

        // if (action.type === 'ADD-POST') {
        //     let newPost = {
        //         id: 5,
        //         author: 'Котик',
        //         text: this._state.profilePage.newPostText,
        //         likesCount: '0'
        //     }
        //     this._state.profilePage.newPostText ? this._state.profilePage.postsData.push(newPost) : alert('ПОШЕЛ ТЫ НАХЕР, КОЗЕЛ');
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'SEND-MESSAGE') {
        //     let newMessage = {
        //         id: 5,
        //         message: this._state.dialogsPage.newMessageText
        //     }
        //     this._state.dialogsPage.newMessageText ? this._state.dialogsPage.messagesData.push(newMessage) : alert('Введите сообщение')
        //     this._state.dialogsPage.newMessageText = '';
        //     this._callSubscriber(this._state);

        // } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        //     this._state.dialogsPage.newMessageText = action.newText;
        //     this._callSubscriber(this._state);
        // }
    }
}

export default store;
window.store = store;