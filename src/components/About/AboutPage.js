import React from 'react';
import Bio from '../Bio/Bio';
import ContactInfo from './/ContactInfo';
import Skills from './Skills';

const AboutPage = () => {
    return (
        <div>
            <Bio/>
            <ContactInfo />
            <Skills />
        </div>
    );
};

export default AboutPage;