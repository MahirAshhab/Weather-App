import React from 'react';
import './Weather.css';
import cloud from '../../assets/cloudy.png';
import rain from '../../assets/rainy.png';
import sun from '../../assets/sunny.png';
import thunder from '../../assets/thunder.png';
import wind from '../../assets/windy.png';
import snow from '../../assets/snowy.png';

const Weather = (props) => {

    const { weather } = props;

    const dateBuilder = (props) => {
        let months = ["January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];

        let day = days[props.getDay()];
        let date = props.getDate();
        let month = months[props.getMonth()];
        let year = props.getFullYear();

        return `${day}, ${month} ${date}, ${year}`;
    }

    const imageLoader = () => {
        const i = weather.weather.length - 1;
        if (parseInt(weather.weather[i].id) < 300) {
            return thunder;
        }

        if (parseInt(weather.weather[i].id) > 299 && parseInt(weather.weather[i].id) < 600) {
            return rain;
        }

        if (parseInt(weather.weather[i].id) > 599 && parseInt(weather.weather[i].id) < 700) {
            return snow;
        }

        if (parseInt(weather.weather[i].id) > 699 && parseInt(weather.weather[i].id) < 800) {
            return wind;
        }

        if (parseInt(weather.weather[i].id) === 800) {
            return sun;
        }

        if (parseInt(weather.weather[i].id) > 800) {
            return cloud;
        }
    }

    return (
        <div className="container absolute top-1/2 left-1/2 mt-6">
            <div className="location-box text-white">
                <div className="location">
                    <h1>
                        {(typeof weather.main != "undefined") ? (weather.name) : ('')}
                        <span>, </span>
                        {(typeof weather.main != "undefined") ? (weather.sys.country) : ('')}
                    </h1>
                </div>
                <div className="date mt-4">
                    <p className="text-xl font-light">
                        {dateBuilder(new Date())}
                    </p>
                </div>
            </div>

            <div className="weather-box text-white mt-4">
                <div className="weather-icon flex justify-center">
                    <img className="w-40"
                        src={(typeof weather.main != "undefined") ? (imageLoader()) : ('')} alt=""
                    />
                </div>
                <div className="temp mt-4">
                    <h1>
                        {(typeof weather.main != "undefined") ? (weather.main.temp) : ('')}
                        <span>° C</span>
                    </h1>
                </div>
                <div className="weather mt-4">
                    <p className="text-xl font-light">
                        {(typeof weather.main != "undefined") ? (weather.weather[weather.weather.length - 1].main) : ('')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Weather;