import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {

    let postsData = props.postsData

    let postsElements = postsData.map(el => <Post key={el.id} id={el.id} message={el.text} author={el.author} likesCount={el.likesCount} />).reverse();

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };



    return (
        <div className={style.myPostsBlock}>
            <h3>My Posts</h3>
            <div className={style.newPost}>
                <textarea className={style.field} ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts