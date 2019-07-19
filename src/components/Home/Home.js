import React from 'react';
import Bio from '../Bio/Bio';
import Timeline from './Timeline/Time';
import Intro from './Intro/Intro';

const Home = () => {
    return (
        <div>
            <Bio category = <Intro /> />
            <Timeline />
        </div>
    );
};

export default Home;