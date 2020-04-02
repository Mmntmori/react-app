import { getUserProfileData, authoriseMe } from '../api/api'
const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_PROFILE = 'SET_PROFILE';

let initialState = {
    profileInfo: null,
    postsData: [
        { id: 1, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ПЕРВЫЙ ПОСТ', likesCount: '4' },
        { id: 2, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ВТОРОЙ ПОСТ', likesCount: '9' },
        { id: 3, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ТРЕТИЙ ПОСТ', likesCount: '22' },
        { id: 4, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ЧЕТВЁРТЫЙ ПОСТ', likesCount: '12' }
    ],
    newPostText: 'New text'
}

//TODO:
//Зарефакторить редьюсер

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profileInfo: action.newProfile,
            }
        }
        case ADD_POST: {
            let stateCopy = {
                ...state,
                myPosts: {
                    ...state,
                    postsData: [...state.postsData]
                }
            }
            let newPostId = stateCopy.postsData[stateCopy.postsData.length - 1].id + 1;
            let newPost = {
                id: newPostId,
                author: 'Котик',
                text: stateCopy.newPostText,
                likesCount: '0'
            }

            stateCopy.newPostText ? stateCopy.postsData.push(newPost) : alert('Введите сообщение');
            stateCopy.newPostText = '';

            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostText = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export const setProfile = (newProfile) => {
    return {
        type: SET_PROFILE,
        newProfile: newProfile
    }
}

export const setUsersProfileDataThunk = (userId) => {
    return (dispatch) => {
        if (userId === undefined) {
            authoriseMe().then(
                response => {
                    console.log(response);
                    if (response.resultCode === 0) {
                        userId = response.data.id;
                        return userId
                    } else {
                        throw new Error('Ваш профиль не загружен, потому что вы не залогинены');
                    }
                }
            )
                .then(userId => {
                    getUserProfileData(userId).then(response => {
                        dispatch(setProfile(response));
                    })
                })
                .catch(error => {
                    alert('Вы не залогинены. Пожалуйста войдите в свою учётную запись')
                    console.log(error)
                })
        } else {
            getUserProfileData(userId).then(response => {
                dispatch(setProfile(response));
            })
        }
    }
}



export default profileReducer;