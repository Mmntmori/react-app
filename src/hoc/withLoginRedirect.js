import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


export const withLoginRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isLoggedIn) {
            // alert('Вы не залогинены. Пожалуйста войдите в свою учётную запись')
            return <Redirect to='/login' />
        } else {
            return <Component {...props}/>
        }
    }

    let mapStateToProps = (state) => ({
        isLoggedIn: state.auth.isLoggedIn
    })

    const ConnectedRedirectComponent = connect(mapStateToProps, null)(RedirectComponent)

    return ConnectedRedirectComponent
}

