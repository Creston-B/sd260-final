import React from 'react';

class ExtraList extends React.Component {
  render = () => {
    return (
      <div className="extra-list">
        <table>
          <tr>
            <th className="banner"></th>
            <th className="movie-title">Movie</th>
            <th className="remove-button">Remove from List</th>
          </tr>
          {this.props.listFilms()}
        </table>
      </div>
    )
  }
}

export default ExtraList;