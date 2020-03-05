import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {    
    return ({
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (e) => {
            dispatch(updateNewPostTextActionCreator(e.target.value));
        }
    })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 


// function MyPostsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().profilePage;
//                     let postsData = state.postsData
//                     let newPostText = state.newPostText;
//                     let dispatch = store.dispatch.bind(store);

//                     let addPost = () => {
//                         dispatch(addPostActionCreator());
//                     };

//                     let onPostChange = (e) => {
//                         dispatch(updateNewPostTextActionCreator(e.target.value));
//                     }

//                     return (
//                         <MyPosts addPost={addPost} onPostChange={onPostChange} postsData={postsData} newPostText={newPostText} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>

//     )
// }

export default MyPostsContainer