import React from 'react';
import './Profiles.css';

const Profiles = () => {
    return (
        <div>
            <a href='https://www.linkedin.com/in/vincent-pace-394562b8/' target='_blank'>
                <img src="/static/media/linked-in.b243c802.svg" style={{padding: 10, width: 48, height: 48}}/>
            </a>
            <a href='https://github.com/vincentpace2395' target='_blank'>
                <img src="/static/media/github.8dc1f056.svg" style={{padding: 10, width: 48, height: 48}}/>
            </a>
        </div>
    );
};

export default Profiles;