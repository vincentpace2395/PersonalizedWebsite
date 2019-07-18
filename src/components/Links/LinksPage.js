import React from 'react';
import Bio from '../Bio/Bio';
import ProfileLinks from './ProfileLinks/ProfileLinks';
import Description from './Description/Description';
import './LinksPage.css';

const LinksPage = () => {
    return (
        <div>
            <Bio category=<Description /> />
            <ProfileLinks />
        </div>
    );
};

export default LinksPage;