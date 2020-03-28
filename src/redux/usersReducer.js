const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_PAGE = 'SET_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

let initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
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
                usersList: action.usersList
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        default: return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersList = (usersList) => {
    return {
        type: SET_USERS,
        usersList: usersList
    }
}

export const setPage = (currentPage) => {
    return {
        type: SET_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const togglePreloader = (isLoading) => {
    return {
        type: TOGGLE_PRELOADER,
        isLoading:  isLoading
    }
}



export default usersReducer;