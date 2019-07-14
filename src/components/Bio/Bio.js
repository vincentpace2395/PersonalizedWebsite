import React from 'react';
import Content from '../Content/Content';

class Bio extends React.Component {
    render() {
        return (
            <div className='bio-top-row'>
                <div className='justify-content-center col-md-4'>
                    Insert Headshot
                </div>
                <div className='col-md-8'>
                    <Content />
                </div>
            </div>
        );
    }
};

export default Bio;