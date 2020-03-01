import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'


function MyPostsContainer(props) {
    let state = props.store.getState().profilePage;
    console.log(state);
    
    let postsData = state.postsData
    let newPostText = state.newPostText;
    let dispatch = props.store.dispatch.bind(props.store);

    let addPost = () => {
        dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        dispatch(updateNewPostTextActionCreator(e.target.value));
    }

    return (<MyPosts addPost={ addPost } onPostChange={ onPostChange } postsData={ postsData } newPostText={ newPostText }/>)
}

export default MyPostsContainer