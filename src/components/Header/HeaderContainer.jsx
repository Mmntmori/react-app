import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, setLoginStatus } from '../../redux/authReducer'
import { authoriseMe } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authoriseMe().then(response => {
            console.log();
            if (response.resultCode === 0) {
                let data = response.data;
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