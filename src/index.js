import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    { id: 1, name: 'Котик 1' },
    { id: 2, name: 'Котик 2' },
    { id: 3, name: 'Котик 3' },
    { id: 4, name: 'Котик 4' }
  ]

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How r you?' },
    { id: 3, message: 'i\'m fine. and u? xoxo' },
    { id: 4, message: 'wow, u\'r cute' }
  ]

  let postsData = [
    { id: 1, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ПЕРВЫЙ ПОСТ', likesCount: 4 },
    { id: 2, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ВТОРОЙ ПОСТ', likesCount: 9 },
    { id: 3, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ТРЕТИЙ ПОСТ', likesCount: 22 },
    { id: 4, author: 'Котик', text: 'ПРИВЕТ Я ТВОЙ ЧЕТВЁРТЫЙ ПОСТ', likesCount: 12 }
  ]

ReactDOM.render(<App messagesData={messagesData} dialogsData={dialogsData} postsData={postsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
