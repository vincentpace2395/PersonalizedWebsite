import React from 'react';
import Bio from '../Bio/Bio';
import './Profiles.css';

const Profiles = () => {
    return (
        <div>
            <Bio />
            <div>
                <a href='https://www.linkedin.com/in/vincent-pace-394562b8/' target='_blank'>
                    <img class="icon-link" src="/static/images/iconmonstr-linkedin-3.svg" style={{padding: 10, width: 48, height: 48}} />
                </a>
                <a href='https://github.com/vincentpace2395' target='_blank'>
                    <img class="icon-link" src="/static/images/GitHub-Mark/PNG/GitHub-Mark-64px.png" style={{padding: 10, width: 48, height: 48}} />
                </a>
            </div>
        </div>
    );
};

export default Profiles;