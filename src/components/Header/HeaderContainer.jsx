import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, setLoginStatus } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            console.log();
            if (response.data.resultCode === 0) {
                let data = response.data.data;
                this.props.setAuthUserData(data.id, data.email, data.login)
                this.props.setLoginStatus(true)
            }

        })
    }

    render() {
        return <Header {...this.props} />
    }


}

const mapStateToProps = (state) => {
    return ({
        isLoading: state.auth.isLoading,
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isLoggedIn: state.auth.isLoggedIn
    })
}

export default connect(mapStateToProps, { setAuthUserData, setLoginStatus })(HeaderContainer)