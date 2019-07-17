import React from 'react';
import Bio from '../Bio/Bio';
import ProfileLinks from './ProfileLinks';
import Companies from './Companies';
import './Profiles.css';

const Profiles = () => {
    return (
        <div>
            <Bio />
            <ProfileLinks />
            <Companies />
        </div>
    );
};

export default Profiles;