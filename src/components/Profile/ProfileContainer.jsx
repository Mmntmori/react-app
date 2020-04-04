import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { setUsersProfileDataThunk } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    getProfile = (userId) => {
        this.props.setUsersProfileDataThunk(userId)
    }

    
    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.getProfile(this.props.match.params.userId)
        }
    }
    
    render() {
        return (
            <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }

    componentDidUpdate(prevProps) {   
        console.log(this.props.match.params.userId,
            prevProps.match.params.userId
            );
             
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfile(this.props.match.params.userId)
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        profileInfo: state.profilePage.profileInfo,
        isLoggedIn: state.auth.isLoggedIn
    })
}

const LoginRedirectProfile = withLoginRedirect(withRouter(ProfileContainer))

export default connect(mapStateToProps, { setUsersProfileDataThunk })(LoginRedirectProfile);