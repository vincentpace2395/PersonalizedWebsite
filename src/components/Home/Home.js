import React from 'react';
import Bio from '../Bio/Bio';
import Timeline from './Timeline/Time';
import Intro from './Intro/Intro';
import WeatherOption from "./WeatherInfo/WeatherOption";
import WeatherDisplay from "./WeatherInfo/WeatherDisplay";

const Home = () => {
    return (
        <div>
            <Bio category = <Intro /> />
            <Timeline />
            <WeatherDisplay />
            <div>
                <WeatherOption />
            </div>
        </div>
    );
};

export default Home;