import React from 'react';
import './App.css';

const navLiStyles = {
  listStyleType: 'none'
}

const homeScroll = () => {
  window.scrollTo(0,0);
}


const NavBar = (props) => {
  return (
    <nav className='Nav'>
      <ul style={navLiStyles}>
        <li onClick={homeScroll}>Home</li>
        <li onClick={props.handleSearchBoxClick}>Search</li>
        <li onClick={props.handleAboutClick}>About</li>
      </ul>
    </nav>
  )
}

export default NavBar;
