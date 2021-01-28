import React from 'react';

export default function ListView(props) {
  return (
    <li className="listToggle lower">
      <a href="/mylist" onClick={() => props.displayList}>View as List</a>
    </li>
  );
}


