import React from 'react';
import Bio from '../Bio/Bio';
import ResumePreview from "./ResumePreview";
import Description from './Description/Description';

const ResumePage = () => {
    return (
        <div>
            <div>
                <Bio category=<Description /> />
            </div>
            <div>
                <ResumePreview />
            </div>
        </div>
    );
};

export default ResumePage;