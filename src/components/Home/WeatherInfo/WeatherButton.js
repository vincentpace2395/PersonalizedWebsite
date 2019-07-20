import React from 'react';

class WeatherButton extends React.Component {
    state = {
        isDisplayed: false
    };

    onClickHandler = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        }, () => {
            this.props.onShowWeather(this.state.isDisplayed);
        })
    };

    render() {
        return (
            <button
                onClick={this.onClickHandler}
                className='btn btn-primary'
                style={{cursor: 'pointer', marginTop: '40px', marginLeft: '60px'}}>
                {`${this.state.isDisplayed ? 'Hide' : 'Show'} Weather`}
            </button>
        )
    }
};

export default WeatherButton;