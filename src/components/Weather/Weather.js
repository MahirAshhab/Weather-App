import React from 'react';
import './Weather.css';
import cloud from '../../assets/cloudy.png';

const Weather = () => {
    return (
        <div className="container">
            <div className="location-box">
                <div className="location">
                    <h1>
                        Dhaka
                        <span>, </span>
                        BD
                    </h1>
                </div>
                <div className="date">
                    <p>
                        Tuesday, 1 March 2022
                    </p>
                </div>
            </div>

            <div className="weather-box">
                <div className="weather-icon">
                    <img src={cloud} alt="" />
                </div>
                <div className="temp">
                    <h1>
                        19
                        <span>° C</span>
                    </h1>
                </div>
                <div className="weather">
                    <p>
                        Cloudy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Weather;