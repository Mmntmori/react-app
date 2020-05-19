import React from 'react';
import style from './Login.module.css'
import { reduxForm, Field } from 'redux-form';
import { loginThunk } from '../../redux/authReducer';

const Login = (props) => {

    const onSubmit = (formData) => {
        debugger
        loginThunk(formData);
        if (formData.email && formData.password) {
        }
    }
    
    return (
        <div className={style.loginPage}>
            <h1>Форма входа</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} placeholder={'Login'} name={'email'}/>
            </div>
            <div>
                <Field component={'input'} placeholder={'Password'} name={'password'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login