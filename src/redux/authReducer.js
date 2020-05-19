import { authoriseMe, login } from '../api/api'


const SET_USER_DATA = 'SET_USER_DATA',
SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';

let initialState = {
    isLoading: true,
    userId: null,
    login: null,
    email: null,
    isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return ({
                ...state,
                ...action.data
            })
        }
        case SET_LOGIN_STATUS: {
            return ({
                ...state,
                isLoggedIn: action.isLoggedIn
            })
        }
        default: return state;
    }
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login }
    }
}

export const setLoginStatus = (status) => {
    return {
        type: SET_LOGIN_STATUS,
        isLoggedIn: status
    }
}

export const setAuthUserDataThunk = () => {
    return (dispatch) => {
        authoriseMe().then(response => {
            console.log();
            if (response.resultCode === 0) {
                let data = response.data;
                dispatch(setAuthUserData(data.id, data.email, data.login))
                dispatch(setLoginStatus(true))
            }
        })

    }
}

export const loginThunk = (formData) => {
    debugger
    return (dispatch) => {
        debugger
        login(formData).then(response => {
            console.log(response);
            if (response.resultCode === 0) {

            }
        });
    }
}

export default authReducer;