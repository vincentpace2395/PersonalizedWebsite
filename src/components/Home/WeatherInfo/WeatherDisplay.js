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
        axios.get('http://api.openweathermap.org/data/2.5/weather?zip=78758,us&APPID=7b4435273deac153aa81d70948d836c9')
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

    renderTemperature = () => {
        return this.state.temperature ? (
                    <div>
                        <div style={{width: '28%', paddingTop: '150px', textAlign: 'center'}}>
                            <h2>{`${this.state.temperature}° F`}</h2>
                        </div>
                        <div style={{paddingTop: '25px'}}>

                        </div>
                    </div>
                ) :  null
    };

    render() {
        return (
            <React.Fragment>
                {!this.state.error ?
                    this.renderTemperature() : (
                    <div style={{color: 'red', width: '28%', paddingTop: '150px', textAlign: 'center'}}>
                        {this.state.error}
                    </div>
                )}
            </React.Fragment>
        );
    }
};

export default WeatherDisplay;