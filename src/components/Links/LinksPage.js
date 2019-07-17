import React from 'react';
import Bio from '../Bio/Bio';
import ProfileLinks from './ProfileLinks/ProfileLinks';
import './LinksPage.css';

const LinksPage = () => {
    return (
        <div>
            <Bio category='Links' />
            <ProfileLinks />
        </div>
    );
};

export default LinksPage;