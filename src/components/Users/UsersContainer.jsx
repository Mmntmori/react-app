import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import { follow,
         unfollow,
         setUsersList,
         setPage,
         setTotalUsersCount,
         togglePreloader } from '../../redux/usersReducer'

class UsersAPIContainer extends React.Component {
    getUsers = () => {
        if (!this.props.usersList.length) {
            this.props.togglePreloader(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsersList(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount/100)
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

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsersList, setPage, setTotalUsersCount, togglePreloader})(UsersAPIContainer)

export default UsersContainer