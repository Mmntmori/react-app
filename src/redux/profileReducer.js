
const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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