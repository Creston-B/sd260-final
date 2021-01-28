import React from 'react';
import Search from './Search';
import ListView from './ListView.jsx'

export default function Header(props) {
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </a>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li>
              <a href="/myList">My List</a>
            </li>
              <ListView 
              dispslayList={props.displayList}
              />
          </ul>
        </nav>
      </div>
      <Search
        query={props.query}
        searchFilter={props.searchFilter}
        searchResults={props.searchResults}
      />
      <extraList />
    </header>
  );
}


