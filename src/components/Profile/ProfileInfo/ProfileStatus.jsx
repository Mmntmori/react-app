
import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusValue: this.props.profileStatus ? this.props.profileStatus : 'Расскажите о себе',
        isLoading: false
    }

    toggleEditMode = () => {
        if (this.state.editMode) {
            this.setState({
                editMode: false
            })
            this.props.updateStatusThunk(this.state.statusValue)
        } else {
            this.setState({
                editMode: true
            })
        }
    }

    changeStatus = (text) => {

        this.setState({
            statusValue: text
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.statusValue !== this.state.statusValue) {
            this.setState({
                statusValue: this.state.statusValue
            })
        }
    }

    render() {

        return (
            <div className={style.statusBar}>
                {this.state.isLoading ?
                    <Preloader /> :
                    null}
                {!this.state.editMode ?
                    <span onDoubleClick={this.toggleEditMode}>{this.props.profileStatus}</span> :
                    <label htmlFor="statusBar" onBlur={this.toggleEditMode}>
                        <input autoFocus={true} type="text" name="statusBar" id="" value={this.state.statusValue} onChange={(e) => { this.changeStatus(e.currentTarget.value) }}></input>
                    </label>
                }
            </div>
        )
    }
}

export default ProfileStatus