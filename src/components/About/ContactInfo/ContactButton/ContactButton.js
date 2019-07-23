import React from 'react';
import ContactOptions from '../ContactOptions/ContactOptions';
import './ContactButton.css';

const ContactButton = () => {
    return (
        <div className='contact-info-box'>
            <button
                className='btn btn-primary'>
                Show/Hide Contact Info
            </button>
        </div>
    );
};

export default ContactButton;