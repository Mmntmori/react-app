import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow,
         unfollow,
         setUsersList,
         setPage,
         setTotalUsersCount,
         togglePreloader,
         toggleFollowingPreloader } from '../../redux/usersReducer'
import { getUsers, deleteFollowing, setFollowing } from '../../api/api'

class UsersAPIContainer extends React.Component {
    setUsers = () => {
        if (!this.props.usersList.length) {
            this.props.togglePreloader(true);
            getUsers(this.props.CurrentPage, this.props.pageSize).then(response => {
                this.props.setUsersList(response.items.map((element) => ({...element, isFollowingIsFetching: false})))
                this.props.setTotalUsersCount(response.totalCount/100)
                this.props.togglePreloader(false);
            },
            reject => {
                console.log(reject);
            })
        }
    }

    onPageChange = (pageNumber) => {
        this.props.togglePreloader(true)
        this.props.setPage(pageNumber)
        getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.setUsersList(response.items)
            this.props.togglePreloader(false);
        },
        reject => {
            console.log(reject);
        })
    }

    unfollowUser = (userId) => {
        this.props.toggleFollowingPreloader(true, userId)
        deleteFollowing(userId).then(response => {
            if (response.resultCode === 0) {
                this.props.unfollow(userId)
                this.props.toggleFollowingPreloader(false, userId)

            }
        })
    }

    followUser = (userId) => {
        this.props.toggleFollowingPreloader(true, userId)
        setFollowing(userId).then(response => {
            if (response.resultCode === 0) {
                this.props.follow(userId)
                this.props.toggleFollowingPreloader(false, userId)
            }
        })
    }

    componentDidMount() {
        this.setUsers()
    }

    render() {
        return (
            <Users usersList={this.props.usersList}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                isLoading={this.props.isLoading}
                followUser={this.followUser}
                unfollowUser={this.unfollowUser}
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

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsersList, setPage, setTotalUsersCount, togglePreloader, toggleFollowingPreloader})(UsersAPIContainer)

export default UsersContainer