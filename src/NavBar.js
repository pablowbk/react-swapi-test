import React from 'react';
import './App.css';

const navLiStyles = {
  listStyleType: 'none'
}



const NavBar = (props) => {
  return (
    <nav className='Nav'>
      <ul style={navLiStyles}>
        <li>Home</li>
        <li>Search</li>
        <li onClick={props.handleClick}>About</li>
      </ul>
    </nav>
  )
}

export default NavBar;
