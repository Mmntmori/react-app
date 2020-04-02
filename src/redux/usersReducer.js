import { getUsers,
    deleteFollowing,
    setFollowing } from '../api/api'

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_PAGE = 'SET_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_PRELOADER = 'TOGGLE_PRELOADER',
    TOGGLE_FOLLOWING_PRELOADER = 'TOGGLE_FOLLOWING_PRELOADER';

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
                        return { ...u, followed: true }
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
                        return { ...u, followed: false }
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
        case TOGGLE_FOLLOWING_PRELOADER: {
            return {
                ...state,
                usersList: [...state.usersList.map((element) => {
                    if (element.id === action.userId) {
                        return { ...element, isFollowingIsFetching: action.isFollowingIsFetching }
                    } else {
                        return element
                    }
                })]
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
        isLoading: isLoading
    }
}

export const toggleFollowingPreloader = (isFollowingIsFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_PRELOADER,
        isFollowingIsFetching: isFollowingIsFetching,
        userId: userId
    }
}

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(togglePreloader(true));
        getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsersList(response.items.map((element) => ({ ...element, isFollowingIsFetching: false }))))
            dispatch(setTotalUsersCount(response.totalCount / 100))
            dispatch(togglePreloader(false));
        },
            reject => {
                console.log(reject);
            })
    }
}

export const onPageChangeThunk = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(togglePreloader(true))
        dispatch(setPage(pageNumber))
        getUsers(pageNumber, pageSize).then(response => {
            dispatch(setUsersList(response.items));
            dispatch(togglePreloader(false));
        },
            reject => {
                console.log(reject);
            })
    }
}

export const unfollowUserThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingPreloader(true, userId))
        // debugger
        deleteFollowing(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollow(userId))
                dispatch(toggleFollowingPreloader(false, userId))
                
            }
        })
    }
}

export const followUserThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingPreloader(true, userId))
        // debugger
        setFollowing(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(userId))
                dispatch(toggleFollowingPreloader(false, userId))
            }
        })
    }
}




export default usersReducer;