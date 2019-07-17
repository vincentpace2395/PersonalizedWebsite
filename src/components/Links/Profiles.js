import React from 'react';
import Bio from '../Bio/Bio';
import ProfileLinks from './ProfileLinks';
import './Profiles.css';

const Profiles = () => {
    return (
        <div>
            <Bio category='Links' />
            <ProfileLinks />
        </div>
    );
};

export default Profiles;