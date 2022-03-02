import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Weather from '../Weather/Weather';

const StyledDiv = styled.div`
    .search-box .search-bar{
        outline: none;
        background-color: rgba(0, 0, 0, 0.35);
        color: #28313b;
        transition: 0.5s ease-in-out;
    }
        
    input::placeholder {
        color: white;
        opacity: 1;
        transition: 0.5s ease-in-out;
    }
        
    input:-ms-input-placeholder {
        color: white;
        transition: 0.5s ease-in-out;
    }
        
    input::-ms-input-placeholder {
        color: white;
        transition: 0.5s ease-in-out;
    }
        
    input:focus::placeholder {
        color: grey;
        opacity: 1;
    }
        
    input:focus:-ms-input-placeholder {
        color: grey;
    }
        
    input:focus::-ms-input-placeholder {
        color: grey;
    }
        
    .search-box .search-bar:focus{
        background-color: rgba(255, 255, 255);
    }
    `;

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
        <StyledDiv>
            <div className="search-box w-full">
                <input
                    type="text"
                    className="search-bar 
                    block 
                    w-full 
                    p-3
                    md:p-4
                    appearance-none border-0 bg-none
                    rounded-bl-2xl rounded-tr-2xl
                    text-sm font-light tracking-widest
                    md:text-xl"
                    placeholder="Search"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            <Weather weather={weather}></Weather>
        </StyledDiv>
    );
};

export default Search;