import React from 'react';
import axios from 'axios';

class WeatherDisplay extends React.Component {
    state = {
        temperature: null,
        error: undefined
    };

    kelvinToFahrenheit = kelvin => {
        return Math.floor((kelvin - 273.15) * (9/5) + 32);
    };

    componentDidMount() {
        axios.get('http://api2.openweathermap.org/data/2.5/weather?zip=78758,us&APPID=7b4435273deac153aa81d70948d836c9')
            .then(response => {
                this.setState({
                    temperature: this.kelvinToFahrenheit(response.data.main.temp)
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            });
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.error ? (
                    <div>
                        <div style={{width: '30%', paddingTop: '200px'}}>
                            {this.state.temperature}
                        </div>
                        <div style={{paddingTop: '25px'}}>

                        </div>
                    </div>
                ) : (
                    <div style={{color: 'red', width: '30%', paddingTop: '200px'}}>{this.state.error}</div>
                )}
            </React.Fragment>
        );
    }
};

export default WeatherDisplay;