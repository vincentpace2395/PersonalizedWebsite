import React from 'react';
import Bio from '../Bio/Bio';
import ProfileLinks from './ProfileLinks/ProfileLinks';
import LinksDescription from './Description/LinksDescription';
import './LinksPage.css';

const LinksPage = () => {
    return (
        <React.Fragment>
            <Bio category=<LinksDescription /> />
            <ProfileLinks />
        </React.Fragment>
    );
};

export default LinksPage;