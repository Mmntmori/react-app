import React from 'react';
import { connect } from 'react-redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { followUserThunk, getUsersThunk, onPageChangeThunk, unfollowUserThunk } from '../../redux/usersReducer';
import Users from './Users';

class UsersAPIContainer extends React.Component {
    setUsers = (currentPage, pageSize) => {
        this.props.getUsersThunk(currentPage, pageSize)
    }

    onPageChange = (pageNumber, pageSize) => {
        this.props.onPageChangeThunk(pageNumber, pageSize)
    }

    unfollowUser = (userId) => {
        this.props.unfollowUserThunk(userId)
    }

    followUser = (userId) => {
        this.props.followUserThunk(userId)
    }

    componentDidMount() {
        this.setUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return (
            <Users usersList={this.props.usersList}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                isLoading={this.props.isLoading}
                setUsers={this.setUsers}
                onPageChange={this.onPageChange}
                followUser={this.followUser}
                unfollowUser={this.unfollowUser}
            />
        )
    }
}

const LoginRedirectUsers = withLoginRedirect(UsersAPIContainer)

const mapStateToProps = (state) => {
    return ({
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isLoggedIn: state.auth.isLoggedIn
    })
}

const UsersContainer = connect(mapStateToProps, { getUsersThunk, onPageChangeThunk, followUserThunk, unfollowUserThunk })(LoginRedirectUsers)

export default UsersContainer