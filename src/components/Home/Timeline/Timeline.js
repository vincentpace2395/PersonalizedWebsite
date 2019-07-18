import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Timeline = () => {
    return (
        <div style={{paddingTop: '30px', width: '50%', float: 'right'}}>
            <VerticalTimeline>
                <VerticalTimelineElement>
                    Timeline starts here
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
};

export default Timeline;