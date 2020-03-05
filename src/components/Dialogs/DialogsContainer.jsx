import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return({
        dialogsPage: state.dialogsPage
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer