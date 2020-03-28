import { addPost, updateNewPostText } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {  
    return ({
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addPost: () => {
            dispatch(addPost());
        },
        onPostChange: (e) => {
            dispatch(updateNewPostText(e.target.value));
        }
    })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 

export default MyPostsContainer