
import React from 'react';
import style from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusValue: 'ВОТ МОЙ СТАТУС'
    }

    toggleEditMode() {
        if (this.state.editMode) {
            this.setState({
                editMode: false
            })
        } else {
            this.setState({
                editMode: true
            })
        }
    }

    changeStatus(text) {
        this.setState({
            statusValue: text
        })
    }

    render() {
        return (
            <div className={ style.statusBar }>
                { !this.state.editMode ?
                <span onDoubleClick={ this.toggleEditMode.bind(this) }>{ this.state.statusValue }</span>:
                <label htmlFor="statusBar" onBlur={ this.toggleEditMode.bind(this) }>
                    <input autoFocus={true} type="text" name="statusBar" id="" value={ this.state.statusValue }onChange={ (e) => {
                        this.changeStatus(e.currentTarget.value)
                    }}></input>
                </label>
                }
            </div>    
        )
    }
}

export default ProfileStatus