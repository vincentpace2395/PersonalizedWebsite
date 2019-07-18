import React from 'react';
import Bio from '../Bio/Bio';
import ContactInfo from './ContactInfo/ContactInfo';
import Description from './Description/Description';
import Skills from './Skills/Skills';

const AboutPage = () => {
    return (
        <div>
            <Bio category=<Description /> />
            <ContactInfo />
            <Skills />
        </div>
    );
};

export default AboutPage;