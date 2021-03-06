import React from 'react';

class Movie extends React.Component {
  render = () => {
    return (
      <div className="movie" key={this.props.id} data-id={this.props.id}>
        <img src={this.props.poster_path} alt={this.props.title} />
        <div className="overlay">
          <div className="title">{this.props.title}</div>
          <div className="rating">{this.props.vote_average}</div>
          <div className="plot">
            {this.props.overview}
          </div>
          <div data-toggled={this.props.my_list} className="listToggle">
            <div onClick={() => this.props.handleListing(this.props)}>
              <i className="fa fa-fw fa-plus"></i>
              <i className="fa fa-fw fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;