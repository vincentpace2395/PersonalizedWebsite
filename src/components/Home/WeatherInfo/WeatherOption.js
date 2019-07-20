import React from 'react';

const WeatherOption = () => {
    return (
        <div style={{paddingTop: '25px'}}>
            <button
                className='btn btn-primary'
                style={{cursor: 'pointer', marginRight: '5px'}}>
                Show Weather
            </button>
            <button
                className='btn btn-default'
                style={{cursor: 'pointer', backgroundColor: '#007bff', color: 'white'}}>
                Hide Weather
            </button>
        </div>
    );
};

export default WeatherOption;