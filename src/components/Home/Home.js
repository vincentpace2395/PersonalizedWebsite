import React from 'react';
import Bio from '../Bio/Bio';
import Timeline from './Timeline/Time';
import Intro from './Intro/Intro';
import WeatherDisplay from "./WeatherInfo/WeatherDisplay";
import WeatherButton from './WeatherInfo/WeatherButton';

class Home extends React.Component {

    state = {
        showWeatherDisplay: false
    };

    onShowWeatherDisplay = show => {
        this.setState({
            showWeatherDisplay: show
        })
    };

    render() {
        return (
            <div>
                <Bio category = <Intro /> />
                <Timeline />
                <WeatherButton onShowWeather={this.onShowWeatherDisplay}/>
                { this.state.showWeatherDisplay ? <WeatherDisplay /> : null }
            </div>
        );
    }
};

export default Home;