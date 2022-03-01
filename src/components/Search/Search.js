import React, { useEffect, useState } from 'react';
import './Seacrh.css';

const Search = () => {
    return (
        <div>
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default Search;