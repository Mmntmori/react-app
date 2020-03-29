import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SideBar from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import { connect } from 'react-redux'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  let sidebar = props.sidebar;
  return (
    <div className="wrapper">
      <div className="container">
        <HeaderContainer />
        <SideBar sidebar={sidebar} />
        <div className="wrapper-content">
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />

          {/* <Route path='/settings' component={Settings}/>
                      <Route path='/music' component={Music}/>
                      <Route path='/feed' component={Feed}/> */}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    sidebar: state.sidebar
  })
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer;