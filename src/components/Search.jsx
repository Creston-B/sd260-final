import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form id="search" className="search">
            <input type="search" placeholder="Search for a title..." value="" />
            <div className="searchResults"></div>
          </form>
    )
  }
}

export default Search;