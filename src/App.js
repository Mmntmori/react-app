import React from 'react';
import Header from './components/Header/Header'
import SideBar from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import './App.css';
import { Route } from 'react-router-dom';


function App(props) {
  let sideBar = props.state.sideBar;
  let dialogsPage = props.state.dialogsPage;
  let profilePage = props.state.profilePage;
  let dispatch = props.dispatch;

  return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <SideBar sideBar={ sideBar }/>
          <div className="wrapper-content">
            <Route path='/dialogs' render={() => <Dialogs dispatch={ dispatch }
                                                          dialogsPage={ dialogsPage } />} />
            <Route path='/profile' render={() => <Profile profilePage={ profilePage }
                                                          dispatch={ dispatch } />} />
            {/* <Route path='/settings' component={Settings}/>
            <Route path='/music' component={Music}/>
            <Route path='/feed' component={Feed}/> */}
          </div>
        </div>
      </div>
  )
}

export default App;