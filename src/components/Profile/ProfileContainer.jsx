import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { setProfile } from '../../redux/profileReducer'
import { getUserProfile } from '../../api/api';


class ProfileContainer extends React.Component {
    getProfile = () => {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2 
        getUserProfile(userId).then(response => {
            this.props.setProfile(response);
        })
    }

    componentDidMount() {
        this.getProfile();
    }

    render() {
        return (
            <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }

    componentDidUpdate() {
        this.getProfile()
    }
}

const mapStateToProps = (state) => {
    return ({
        profileInfo: state.profilePage.profileInfo,
    })
}

export default connect(mapStateToProps, { setProfile })(withRouter(ProfileContainer));