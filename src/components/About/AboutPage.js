import React from 'react';
import Bio from '../Bio/Bio';
import ContactInfo from './ContactInfo/ContactInfo';
import Skills from './Skills/Skills';

const AboutPage = () => {
    return (
        <div>
            <Bio category='About' />
            <ContactInfo />
            <Skills />
        </div>
    );
};

export default AboutPage;