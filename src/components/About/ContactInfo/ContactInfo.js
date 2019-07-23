import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className='contact-info-box'>
            <React.Fragment>
                <h6>Email</h6>
                <p>vpace@nhpace.net</p>
            </React.Fragment>
            <React.Fragment>
                <h6>Phone Number</h6>
                <p>(603)714-1382</p>
            </React.Fragment>
        </div>
    );
};

export default ContactInfo;