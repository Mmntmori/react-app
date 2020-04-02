import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { setUsersProfileDataThunk } from '../../redux/profileReducer'

class ProfileContainer extends React.Component {
    getProfile = (userId) => {
        this.props.setUsersProfileDataThunk(userId)
    }
    
    componentDidMount() {
        this.getProfile(this.props.match.params.userId)
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
    })
}

export default connect(mapStateToProps, { setUsersProfileDataThunk })(withRouter(ProfileContainer));