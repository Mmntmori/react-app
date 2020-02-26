import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'



function MyPosts(props) {

    let postsData = props.postsData

    let postsElements = postsData.map(el => <Post key={el.id} id={el.id} message={el.text} author={el.author} likesCount={el.likesCount} />).reverse();

    // let newPostElement = React.createRef();



    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        props.dispatch(updateNewPostTextActionCreator(e.target.value));
    }

    return (
        <div className={ style.myPostsBlock }>
            <h3>My Posts</h3>
            <div className={ style.newPost }>
                <textarea className={ style.field } 
                          onChange={ onPostChange }
                        //   ref={ newPostElement }
                          value={ props.newPostText }/>
                <button onClick={ addPost } className={ style.btn }>Опубликовать</button>
            </div>
            <div className={ style.posts }>
                { postsElements }
            </div>
        </div>

    )
}

export default MyPosts