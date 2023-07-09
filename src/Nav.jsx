import React from 'react'
import logo from './assets/logo.png';

function Nav(searchProps) {
    function reload() {
        window.location.reload();
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') 
            {searchProps.handleSearch()};
        }

    return (
        <nav>
            <div className="main-nav  flex">
                <img src={logo} className='app-logo' onClick={reload} alt='logo'/>
                <div className="search-bar flex">
                    <input id="search-text" type="text" className="news-input" placeholder="e.g. Sports or Anime"  onKeyDown={handleKeyPress}></input>
                    <button id="search-button" onClick={searchProps.handleSearch} className="search-button">Search</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;