
import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusValue: this.props.profileStatus ? this.props.profileStatus : 'Расскажите о себе'
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

    render() {
        
        return (
            <div className={ style.statusBar }>
                { !this.state.editMode ?
                <span onDoubleClick={ this.toggleEditMode }>{ this.props.profileStatus }</span>:
                <label htmlFor="statusBar" onBlur={ this.toggleEditMode }>
                    <input autoFocus={true} type="text" name="statusBar" id="" value={ this.state.statusValue } onChange={ (e) => { this.changeStatus(e.currentTarget.value) }}></input>
                </label>
                }
            </div>    
        )
    }
}

export default ProfileStatus