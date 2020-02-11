import React from 'react';
import Header from './components/Header/Header'
import SideBar from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <SideBar />
        <div className="wrapper-content">
          <Dialogs />
        {/* <Profile /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
