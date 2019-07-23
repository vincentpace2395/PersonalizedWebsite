import React from 'react';
import Bio from '../Bio/Bio';
import ContactButton from './ContactInfo/ContactButton/ContactButton';
import Description from './Description/Description';
import Skills from './Skills/Skills';

const AboutPage = () => {
    return (
        <div>
            <Bio category=<Description /> />
            <ContactButton />
            <Skills />
        </div>
    );
};

export default AboutPage;