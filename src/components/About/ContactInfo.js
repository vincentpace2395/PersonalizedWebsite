import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className='contact-info-box'>
            <div>
                <h6>Email</h6>
                <p>vpace@nhpace.net</p>
            </div>
            <div>
                <h6>Phone Number</h6>
                <p>(603)714-1382</p>
            </div>
        </div>
    );
};

export default ContactInfo;