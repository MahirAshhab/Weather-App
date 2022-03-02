import Weather from '../Weather/Weather';
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
            <Weather></Weather>
        </div>
    );
};

export default Search;