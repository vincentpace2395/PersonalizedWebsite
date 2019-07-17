import React from 'react';
import Companies from '../Companies/Companies';
import ProfileImages from '../ProfileImages/ProfileImages';
import '../LinksPage.css';

const ProfileLinks = () => {
    return (
        <div className='profile-links'>
            <Companies />
            <ProfileImages/>
        </div>
    );
};

export default ProfileLinks;