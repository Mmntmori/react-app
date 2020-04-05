import React from 'react';
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    console.log(props);
    
    return (
        <div className={ style.info }>
            <div className={ style.banner }>
                <img src="http://placekitten.com/1200/700" alt="banner"/>
            </div>
            <div className={ style.descriptionBlock }>
                <div className={ style.profilePic }>
                    <img src={ props.profileInfo.photos.small ? props.profileInfo.photos.small : 'https://placekitten.com/200/200' } alt={ props.profileInfo.fullName }/>
                </div>
                <div className={ style.profileInfo }>
                    <h1>{ props.profileInfo.fullName }</h1>
                    <p>{ props.profileInfo.aboutMe }</p>
                    { props.profileInfo.lookingForAJob ? <span>'Ищу работу'</span> : null }
                    <p>Мой статус: </p>
                    <ProfileStatus profileId={ props.profileInfo.userId } profileStatus={ props.profileStatus } updateStatusThunk={ props.updateStatusThunk }/>
                    { props.profileInfo.lookingForAJobDescription ? <span>{props.profileInfo.lookingForAJobDescription}</span> : null }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo