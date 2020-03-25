import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUserListActionCreator, setPageActionCreator, setTotalUsersCountActionCreator } from '../../redux/usersReducer'



const mapStateToProps = (state) => {
    return({
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsersList: (usersList) => {
            dispatch(setUserListActionCreator(usersList))
        },
        setPage: (currentPage) => {
            dispatch(setPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        }
    })
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer