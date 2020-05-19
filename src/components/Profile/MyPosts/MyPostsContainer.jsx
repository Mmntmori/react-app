import { addPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

const mapStateToProps = (state) => {
    return ({
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addPost: (newPostText) => {
            dispatch(addPost(newPostText));
            dispatch(reset('postWindowForm'));
        }
    })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer