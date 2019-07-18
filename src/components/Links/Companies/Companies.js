import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import CompanyIcons from './CompanyIcons';

const Companies = () => {
    return (
        <div className='col-md-8'>
            <VerticalTimeline>
                <VerticalTimelineElement></VerticalTimelineElement>

            </VerticalTimeline>

            <CompanyIcons/>
        </div>

    )
};

export default Companies;