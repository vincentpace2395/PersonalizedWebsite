import React from 'react';
import Bio from '../Bio/Bio';
import ResumePreview from "./ResumePreview";
import Description from './Description/Description';

const DocumentsPage = () => {
    return (
        <React.Fragment>
            <React.Fragment>
                <Bio category=<Description /> />
            </React.Fragment>
            <React.Fragment>
                <ResumePreview />
            </React.Fragment>
        </React.Fragment>
    );
};

export default DocumentsPage;