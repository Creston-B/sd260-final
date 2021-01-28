// image source, title, rating, plot, checked toggled bool

import React from 'react';
import Search from './Search';

export default function Header(props) {
return(
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
              </ul>
            </nav>
          </div>
          {/* <Search/> */}
        </header>
  );
}


