import React from 'react';
import Header from './components/Header/Header'
import SideBar from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';


function App(props) {
  let sideBar = props.state.sideBar;
  let dialogsPage = props.state.dialogsPage;
  let profilePage = props.state.profilePage;

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Header />
          <SideBar sideBar={sideBar}/>
          <div className="wrapper-content">
            <Route path='/dialogs' render={() => <Dialogs dialogsPage={dialogsPage} />} />
            <Route path='/profile' render={() => <Profile profilePage={profilePage} />} />
            {/* <Route path='/settings' component={Settings}/>
            <Route path='/music' component={Music}/>
            <Route path='/feed' component={Feed}/> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;