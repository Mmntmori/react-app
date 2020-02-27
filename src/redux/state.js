import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

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
                    avatar: 'http://placekitten.com/120/110'
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
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;