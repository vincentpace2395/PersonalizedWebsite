import React from 'react';
import Bio from '../Bio/Bio';
import ResumePreview from "./ResumePreview";

const ResumePage = () => {
    return (
        <div>
            <Bio />
            <div>
                <ResumePreview />
            </div>
        </div>
    );
};

export default ResumePage;