import React from 'react';
import * as axios from 'axios';
import Profile from './Profile'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { setProfile } from '../../redux/profileReducer'


class ProfileContainer extends React.Component {
    getProfile = () => {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2 
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setProfile(response.data);
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
}

const mapStateToProps = (state) => {
    return ({
        profileInfo: state.profilePage.profileInfo,
    })
}

export default connect(mapStateToProps, { setProfile })(withRouter(ProfileContainer));