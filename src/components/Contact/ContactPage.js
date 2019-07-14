import React from 'react';
import Bio from '../Bio/Bio';
import ContactInfo from '../Contact/ContactInfo';

const ContactPage = () => {
    return (
        <div>
            <Bio/>
            <div>
                <ContactInfo />
            </div>
        </div>
    );
};

export default ContactPage;