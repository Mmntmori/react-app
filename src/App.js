import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import SideBar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { connect } from 'react-redux'
 
function App(props) {
  let sidebar = props.sidebar;
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <SideBar sidebar={sidebar} />
        <div className="wrapper-content">
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile' render={() => <Profile />} />
          {/* <Route path='/dialogs' render={() => <DialogsContainer store={store} />} />
                  <Route path='/profile' render={() => <Profile store={store} />} /> */}
          {/* <Route path='/settings' component={Settings}/>
                      <Route path='/music' component={Music}/>
                      <Route path='/feed' component={Feed}/> */}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return({
    sidebar: state.sidebar
  })
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer;