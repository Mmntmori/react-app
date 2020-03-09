import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUserListActionCreator } from '../../redux/usersReducer'



const mapStateToProps = (state) => {
    return({
        usersList: state.usersPage.usersList
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
        setUserList: (usersList) => {
            dispatch(setUserListActionCreator(usersList))
        }
    })
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer