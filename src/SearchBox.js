import React from 'react';
import './App.css'

// class SearchBox extends React.Component {
//   render() {
//     const { visibility, searchChange, handleSearchBoxClick } = this.props;
//     return (
//         <div
//           className="SearchBox"
//           style={ visibility ? {display: 'flex'} : {display: 'none'}}
//           >
//           <input
//             className="input"
//             type="search"
//             placeholder="start typing here"
//             onChange={searchChange}
//             autoFocus//={ visibility ? 'true' : 'false' }
//           />
//           <p onClick={handleSearchBoxClick}>hide search bar</p>
//         </div>
//       )
//   }
// }


const SearchBox = ({ searchChange, visibility, handleSearchBoxClick }) => {
  return (
    <div
      className="SearchBox"
      style={ visibility ? {display: 'flex'} : {display: 'none'}}
      >
      <input
        className="input"
        type="search"
        placeholder="start typing here"
        onChange={ searchChange }
        autoFocus={ visibility ? true : false }
      />
      <p onClick={ handleSearchBoxClick }>hide search bar</p>
    </div>
  )
}


export default SearchBox;
