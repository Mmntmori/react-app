import { getUserProfileData, authoriseMe, getStatus, updateStatus } from '../api/api'

const ADD_POST = 'ADD-POST',
    SET_PROFILE = 'SET_PROFILE',
    SET_STATUS = 'SET_STATUS';

let initialState = {
    profileInfo: null,
    postsData: [
        { id: 1, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ПЕРВЫЙ ПОСТ', likesCount: '4' },
        { id: 2, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ВТОРОЙ ПОСТ', likesCount: '9' },
        { id: 3, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ТРЕТИЙ ПОСТ', likesCount: '22' },
        { id: 4, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ЧЕТВЁРТЫЙ ПОСТ', likesCount: '12' }
    ],
    profileStatus: null
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
        case SET_STATUS: {
            return {
                ...state,
                profileStatus: action.status,
            }
        }
        case ADD_POST: {
            debugger
            let stateCopy = {
                ...state,
                postsData: [...state.postsData]
            }
            let newPost = {
                id: stateCopy.postsData[stateCopy.postsData.length - 1].id + 1,
                author: 'Котик',
                text: action.newText,
                likesCount: '0'
            }

            action.newText ? stateCopy.postsData.push(newPost) : alert('Введите сообщение');

            return stateCopy;
        }

        default: return state;
    }
}

export const addPost = (newText) => {
    return {
        type: ADD_POST,
        newText: newText
    }
}

export const setProfile = (newProfile) => {
    return {
        type: SET_PROFILE,
        newProfile: newProfile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}

export const setStatusThunk = (userId) => {
    return (dispatch) => {
        if (!userId) {
            authoriseMe().then(
                response => {
                    if (response.resultCode === 0) {
                        userId = response.data.id;
                        return userId
                    }
                }
            )
                .then(userId => {
                    getStatus(userId).then(response => {
                        dispatch(setStatus(response.data))
                    })
                })

        } else {
            getStatus(userId).then(response => {
                dispatch(setStatus(response.data))
            })
        }
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

    }
}

export const setUsersProfileDataThunk = (userId) => {
    return (dispatch) => {
        if (!userId) {
            authoriseMe().then(
                response => {
                    if (response.resultCode === 0) {
                        userId = response.data.id;
                        return userId
                    }
                }
            )
                .then(userId => {
                    getUserProfileData(userId).then(response => {
                        dispatch(setProfile(response));
                    })
                })
        } else {
            getUserProfileData(userId).then(response => {
                dispatch(setProfile(response));
            })
        }
    }
}



export default profileReducer;