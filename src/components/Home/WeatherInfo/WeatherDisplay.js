import React from 'react';
import axios from 'axios';

class WeatherDisplay extends React.Component {
    state = {
        temperature: null,
    };

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=7b4435273deac153aa81d70948d836c9')
            .then(response => {
                this.setState({
                    temperature: response
                });
            }
        )
    }

    render() {
        return (
            <div>
                <div style={{width: '30%', paddingTop: '200px'}}>
                    {this.state.temperature}
                </div>
                <div style={{paddingTop: '25px'}}>

                </div>
            </div>

        );
    }
};

export default WeatherDisplay;