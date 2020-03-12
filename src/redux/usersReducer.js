const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS';

let initialState = {
    usersList: [
        // {
        //     id: 1,
        //     isFollowed: false,
        //     fullName: 'КОТИК 1',
        //     userPicture: 'http://placekitten.com/500/400',
        //     location: {
        //         country: 'СТРАНА ЧУДЕС',
        //         city: 'ДОМ КОЛОТУШКИНА'
        //     },
        //     status: 'ЕМ ВАТРУШКИ',

        // },
        // {
        //     id: 2,
        //     isFollowed: false,
        //     fullName: 'КОТИК 2',
        //     userPicture: 'http://placekitten.com/400/500',
        //     location: {
        //         country: 'СТРАНА ЧУДЕС',
        //         city: 'ДОМ ПЕТРУШКИНА'
        //     },
        //     status: 'ПОЮ ЧАСТУШКИ',

        // },
        // {
        //     id: 3,
        //     isFollowed: true,
        //     fullName: 'КОТИК 3',
        //     userPicture: 'http://placekitten.com/400/400',
        //     location: {
        //         country: 'СТРАНА ЧУДЕС',
        //         city: 'ДОМ СВИСТУЛЬКИНА'
        //     },
        //     status: 'ЧЕШУ МАКУШКУ',

        // },
        // {
        //     id: 4,
        //     isFollowed: false,
        //     fullName: 'КОТИК 4',
        //     userPicture: 'http://placekitten.com/500/500',
        //     location: {
        //         country: 'СТРАНА ЧУДЕС',
        //         city: 'ДОМ ТУПКИНА'
        //     },
        //     status: 'ПРЫГАЮ КАК ЛЯГУШКИ',

        // }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return ({
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, isFollowed: true }
                    }
                    return u
                })
            })
        }
        case UNFOLLOW: {
            return ({
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, isFollowed: false }
                    }
                    return u
                })
            })
        }
        case SET_USERS: {
            return {
                ...state,
                usersList: [...state.usersList, ...action.usersList]
            }
        }

        default: return state;
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUserListActionCreator = (usersList) => {
    return {
        type: SET_USERS,
        usersList: usersList
    }
}


export default usersReducer;