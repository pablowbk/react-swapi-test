import React from 'react';
import './App.css'

const SearchBox = ({ searchChange, visibility, handleSearchBoxClick }) => {
  return (
    <div
      className="SearchBox"
      style={ visibility ? {display: 'flex'} : {display: 'none'}}
      >
      <input
        className="input"
        type="search"
        placeholder="start typing..."
        onChange={searchChange}
      />
      <p onClick={handleSearchBoxClick}>hide search bar</p>
    </div>
  )
}


export default SearchBox
