import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserDataThunk } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {        
        this.props.setAuthUserDataThunk()
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

export default connect(mapStateToProps, { setAuthUserDataThunk })(HeaderContainer)