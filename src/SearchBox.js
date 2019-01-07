import React from 'react';
import './App.css'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="SearchBox">
      <input
        className="input"
        type="search"
        placeholder="start typing..."
        onChange={searchChange}
        autoFocus
      />
    </div>
  )
}


export default SearchBox
