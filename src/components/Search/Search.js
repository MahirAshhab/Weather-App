import React, { useEffect, useState } from 'react';
import Weather from '../Weather/Weather';
import './Seacrh.css';

const Search = () => {

    const api = {
        key: "d69ea9d6f4788c9545ec06595f50710d",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&APPID=d69ea9d6f4788c9545ec06595f50710d`)
            .then(res => res.json())
            .then(data => setWeather(data));
    }, [])

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(data => {
                    setWeather(data);
                    setQuery('');
                    console.log(data);
                })
        }
    }

    return (
        <div>
            <div className="search-box w-full">
                <input
                    type="text"
                    className="search-bar 
                    block 
                    w-full 
                    p-4 
                    appearance-none border-0 bg-none
                    rounded-bl-2xl rounded-tr-2xl
                    text-xl"
                    placeholder="Search"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            <Weather weather={weather}></Weather>
        </div>
    );
};

export default Search;