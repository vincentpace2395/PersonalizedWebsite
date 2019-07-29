import React from 'react';
import './ResumePreview.css';

const ResumePreview = () => {
    return (
        <div className='resume-link'>
            <a href='/resume.pdf' target='_blank'>
                <button className='btn-default'>
                    View Resume
                </button>
            </a>
        </div>
    );
};

export default ResumePreview;