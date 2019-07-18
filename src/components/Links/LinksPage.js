import React from 'react';
import Bio from '../Bio/Bio';
import ProfileLinks from './ProfileLinks/ProfileLinks';
import LinksDescription from './Description/LinksDescription';
import './LinksPage.css';

const LinksPage = () => {
    return (
        <div>
            <Bio category=<LinksDescription /> />
            <ProfileLinks />
        </div>
    );
};

export default LinksPage;