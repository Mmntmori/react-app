import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form';



function MyPosts(props) {
    let postsData = props.postsData

    let postsElements = postsData.map(el => <Post key={el.id} id={el.id} message={el.text} author={el.author} likesCount={el.likesCount} />).reverse();

    const onSubmit = (formData) => {
        console.log(formData)
        props.addPost(formData.newPostText);
    }

    return (
        <div className={ style.myPostsBlock }>
            <h3>My Posts</h3>
            <div className={ style.newPost }>
                <PostWindowReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={ style.posts }>
                { postsElements }
            </div>
        </div>

    )
}

function PostWindow(props) {


    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.messagesList}>
                <Field component='textarea' name='newPostText' className={style.field} />
                <button className={style.btn}>Отправить</button>
            </div>
        </form>

    )
}

const PostWindowReduxForm = reduxForm({ form: 'postWindowForm' })(PostWindow);




export default MyPosts