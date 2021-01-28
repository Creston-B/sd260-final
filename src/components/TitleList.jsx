import React from 'react';
import Movie from './Movie.jsx';

class TitleList extends React.Component {

  render = () => {
    return (
      <div className="titleList">
        <div className="title">
          <h1>{this.props.genre}</h1>
          <div className="titles-wrapper">
            {this.props.list ? this.props.list.map(movie => new Movie({ ...movie, handleListing: this.props.handleListing}).render()):''}
          </div>
        </div>
      </div>
    )
  }
}
export default TitleList;