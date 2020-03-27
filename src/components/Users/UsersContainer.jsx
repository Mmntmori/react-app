import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator,
         unfollowActionCreator,
         setUserListActionCreator,
         setPageActionCreator,
         setTotalUsersCountActionCreator,
         togglePreloaderActionCreator } from '../../redux/usersReducer'

class UsersAPIContainer extends React.Component {
    getUsers = () => {
        if (!this.props.isLoading) {
            this.props.togglePreloader(true)
        }
        
        if (this.props.usersList.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsersList(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.togglePreloader(false);
            },
            reject => {
                console.log(reject);
            })
        }
    }

    onPageChange = (pageNumber) => {
        if (!this.props.isLoading) {
            this.props.togglePreloader(true)
        }

        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsersList(response.data.items)
            this.props.togglePreloader(false);
        },
        reject => {
            console.log(reject);
        })
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        return (
            <Users usersList={this.props.usersList}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChange={this.onPageChange}
                isLoading={this.props.isLoading}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return({
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
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
        },
        togglePreloader: (isLoading) => {
            dispatch(togglePreloaderActionCreator(isLoading))
        }
    })
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer