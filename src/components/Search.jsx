import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <form id="search" className="search">
            <input type="search" placeholder="Search for a title..." onChange={(e) => this.props.searchFilter(e)}/>
            <div className="searchResults">{this.props.searchResults}</div>
          </form>
    )
  }
}

export default Search;