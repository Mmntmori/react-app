import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';


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

const LoginRedirectDialogs = withLoginRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(LoginRedirectDialogs)

export default DialogsContainer