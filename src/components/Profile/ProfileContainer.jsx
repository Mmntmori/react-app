import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { setStatusThunk, setUsersProfileDataThunk, updateStatusThunk } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    getProfile = (userId) => {
        this.props.setUsersProfileDataThunk(userId)
    }

    
    componentDidMount() {        
        if (this.props.isLoggedIn) {
            this.getProfile(this.props.match.params.userId)
            this.props.setStatusThunk(this.props.match.params.userId)
        }
    }
    
    render() {
        return (
            <Profile {...this.props} profileInfo={this.props.profileInfo} profileStatus={this.props.profileStatus} updateStatusThunk={this.props.updateStatusThunk}/>
        )
    }

    componentDidUpdate(prevProps) {   
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfile(this.props.match.params.userId)
        }
    }
}



const mapStateToProps = (state) => {
    return ({
        profileInfo: state.profilePage.profileInfo,
        profileStatus: state.profilePage.profileStatus
    })
}

export default compose(
    connect(mapStateToProps, { setUsersProfileDataThunk, setStatusThunk, updateStatusThunk }),
    withRouter,
    withLoginRedirect
)(ProfileContainer)