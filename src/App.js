import React, { Component } from 'react';
import * as MovieAPI from './lib/MovieAPI';
import Header from './components/Header.jsx';
import TitleList from './components/TitleList';
import { Route, BrowserRouter, Switch, useLocation } from 'react-router-dom';
import ListView from './components/ListView';

class App extends Component {


  state = {
    query: ``,
    list: [],
    genres: [],
    searchResults: ``
  };

  componentDidMount = () => {
    MovieAPI.getAll()
      .then(data => this.setState({ list: data }))
    MovieAPI.genres()
      .then(data => data.sort((a, b) => a.name > b.name ? 1 : -1))
      .then(data => this.setState({ genres: data }))
  }

  handleListing = (movie) => {
    if (movie.my_list) {
      MovieAPI.removeFromList(movie)
        .then(ret => {
          this.setState((prevState) => ({
            list: prevState.list.map(mov => mov.id === ret.id ? ret : mov)
          }))
        })
    } else {
      MovieAPI.addToList(movie)
        .then(ret => this.setListState(ret))
    }
  }

  setListState = (newMovie) => {
    this.setState((prevState) => ({
      list: prevState.list.map(mov => mov.id === newMovie.id ? newMovie : mov)
    }))
  }

  searchFilter = (e) => {
    e.preventDefault()
    if (e.target.value !== ``) {
      this.setState({ query: e.target.value, searchResults: `Found ${this.movieCount()} movies with the query ${e.target.value}` })
    } else {
      this.setState({ query: ``, searchResults: `` })
    }

  }

  listGenre = (props) => {
    let movieList =
      this.state.genres.map(genre => {
        return (
          <React.Fragment key={genre.id}>
            <TitleList
              genre={genre.name}
              list={this.state.list.filter(mov => mov.genre_ids.includes(genre.id) && (mov.title.toLowerCase().includes(this.state.query.toLowerCase()) || mov.overview.toLowerCase().includes(this.state.query.toLowerCase())))}
              handleListing={this.handleListing}
              {...props}
            />
          </React.Fragment>);
      }).filter(frag => frag.props.children.props.list.length > 0)
    return (movieList)
  }

  listGenreFavs = (props) => {
    let movieList =
      <React.Fragment>
        <TitleList
          list={this.state.list.filter(mov => mov.my_list && (mov.title.toLowerCase().includes(this.state.query.toLowerCase()) || mov.overview.toLowerCase().includes(this.state.query.toLowerCase())))}
          handleListing={this.handleListing}
          {...props}
        />
      </React.Fragment>
    return (movieList)
  }

  render = () => {
    return (
      <BrowserRouter>
        <Header
          query={this.state.query}
          searchFilter={this.searchFilter}
          searchResults={this.state.searchResults}
        />
        <Switch>
          <Route
            exact
            path="/mylist"
            render={() => (
              this.listGenreFavs()
            )} />
          <Route
            exact
            path="/"
            render={() => (
              this.listGenre()
            )} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
