import React from 'react';
import Header from './components/Header/Header'
import SideBar from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import './App.css';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {
  let sidebar = props.store.getState().sidebar;
  let store = props.store

  return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <SideBar sidebar={ sidebar }/>
          <div className="wrapper-content">
            <Route path='/dialogs' render={() => <DialogsContainer store={ store } />} />
            <Route path='/profile' render={() => <Profile store={ store } />} />
            {/* <Route path='/settings' component={Settings}/>
            <Route path='/music' component={Music}/>
            <Route path='/feed' component={Feed}/> */}
          </div>
        </div>
      </div>
  )
}

export default App;