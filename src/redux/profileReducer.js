
const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ПЕРВЫЙ ПОСТ', likesCount: '4' },
        { id: 2, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ВТОРОЙ ПОСТ', likesCount: '9' },
        { id: 3, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ТРЕТИЙ ПОСТ', likesCount: '22' },
        { id: 4, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ЧЕТВЁРТЫЙ ПОСТ', likesCount: '12' }
    ],
    newPostText: 'New text'
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPostId = state.postsData[state.postsData.length - 1].id + 1;

            let newPost = {
                id: newPostId,
                author: 'Котик',
                text: state.newPostText,
                likesCount: '0'
            }
            state.newPostText ? state.postsData.push(newPost) : alert('ПОШЕЛ ТЫ НАХЕР, КОЗЕЛ');
            state.newPostText = '';

            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export default profileReducer;