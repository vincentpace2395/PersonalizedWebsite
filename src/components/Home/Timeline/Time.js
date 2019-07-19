import React from 'react';
import { Timeline, Content, ContentYear, ContentBody, Description } from 'vertical-timeline-component-react';

const Time = () => {
    return (
        <div style={{paddingTop: '30px', width: '50%', float: 'right'}}>
            <Timeline style={{color: 'black'}}>
                <Content>
                    <ContentYear year="2019" />
                    <ContentBody title="Begin learning React">
                        <Description text="Start working on front end development, learning React" />
                    </ContentBody>
                </Content>
                <Content>
                    <ContentYear year="2018" />
                    <ContentBody title="Relocate to Austin, TX">
                        <Description text="Relocation to Austin, TX" />
                    </ContentBody>
                </Content>
                <Content>
                    <ContentYear year="2017" />
                    <ContentBody title="College Graduation, First full time software job">
                        <Description text="Graduate from University of South Florida with my Bachelor's Degree in
                        Computer Science and begin my first full time software job as a QA Engineer" />
                    </ContentBody>
                </Content>
                <Content>
                    <ContentYear year="2016" />
                    <ContentBody title="Start first software (QA) internship">
                        <Description text="Land internship as QA Intern in Tampa, FL. First software job." />
                    </ContentBody>
                </Content>
                <Content>
                    <ContentYear year="2013" />
                    <ContentBody title="Begin College">
                        <Description text="Start college at University of South Florida pursuing my Bachelor's Degree in Computer Science" />
                    </ContentBody>
                </Content>
            </Timeline>
        </div>
    );
};

export default Time;