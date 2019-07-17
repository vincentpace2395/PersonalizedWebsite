import React from 'react';
import Content from '../Content/Content';
import './Bio.css';

class Bio extends React.Component {
    render() {
        return (
            <div className='bio-top-row'>
                <img
                    alt="xl avatar"
                    src="https://avatars0.githubusercontent.com/u/16357524?s=400&u=25983d0880562b3b1f59e2d4007adf419e2a8c35&v=4"
                />
                <div className='col-md-8'>
                    <Content />
                    <div className='category'>
                        <h4 style={{textAlign: 'center', paddingTop: '40px'}}>{this.props.category}</h4>
                    </div>
                </div>
            </div>
        );
    }
};

export default Bio;