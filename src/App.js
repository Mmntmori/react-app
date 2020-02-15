import React from 'react';
import Header from './components/Header/Header'
import SideBar from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';




function App(props) {
  let dialogsData = props.dialogsData;

  let messagesData = props.messagesData;

  let postsData = props.messagesData;

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Header />
          <SideBar />
          <div className="wrapper-content">
            <Route path='/dialogs' component={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData} />} />
            <Route path='/profile' component={() => <Profile postsData={postsData} />} />
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
