import Dialogs from './Dialogs'
import { sendMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { reset } from 'redux-form';


const mapStateToProps = (state) => {
    return({
        dialogsPage: state.dialogsPage
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        sendMessage: (newText) => {
            dispatch(sendMessageActionCreator(newText));
            //Пока не знаю оставить ли тут второй диспатч или замутить thunk...
            dispatch(reset('messageWindowForm'));
        }
    })
}

const LoginRedirectDialogs = withLoginRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(LoginRedirectDialogs)

export default DialogsContainer