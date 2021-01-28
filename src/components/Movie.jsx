import React from 'react';
import propTypes from 'prop-types';

class Movie extends React.Component {
  render = () => {
    return(
    <div className="movie" key={this.props.key}>
      <img src={this.props.img} alt={this.props.title} />
      <div className="overlay">
        <div className="title">{this.props.title}</div>
        <div className="rating">{this.props.rating}</div>
        <div className="plot">
          {this.props.plot}
        </div>
        <div data-toggled={this.props.toggled} className="listToggle">
          <div>
            <i className="fa fa-fw fa-plus"></i>
            <i className="fa fa-fw fa-check"></i>
          </div>
        </div>
      </div>
    </div>
  )}
}

Movie.defaultProps = {
  img: "%PUBLIC_URL%/image-not-availible.jpg",
  plot: "Plot not found",
  title: `Title not found`,
  rating: `N/A`,
  toggled: false
};

export default Movie;