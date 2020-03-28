import React from 'react';
import * as axios from 'axios';
import Profile from './Profile'
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profileReducer'


class ProfileContainer extends React.Component {
    getProfile = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12`).then(response => {
            this.props.setProfile(response.data);
        })
    }

    componentDidMount() {
        this.getProfile();
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/6711`).then(response => {
            // this.props.setProfile(response.data);
        // })

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

export default connect(mapStateToProps, { setProfile })(ProfileContainer);