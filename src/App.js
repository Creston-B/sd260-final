import React, { Component, Fragment } from 'react';
import * as MovieAPI from './lib/MovieAPI';
import Header from './components/Header.jsx';
import TitleList from './components/TitleList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {

  state = {
    search: ``,
    list: []
  };

  componentDidMount = () => {
    MovieAPI.getAll()
      .then(data => {
        this.setState({ list: data })
      })
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
        .then(ret => {
          this.setState((prevState) => ({
            list: prevState.list.map(mov => mov.id === ret.id ? ret : mov)
          }))
        })
    }
  }

  render = () => {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/mylist"
            render={(props) => (
              <React.Fragment>
                <TitleList
                  list={this.state.list.filter(movie => movie.my_list ? movie : ``)}
                  handleListing={this.handleListing}
                  {...props}
                />
              </React.Fragment>
            )} />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <TitleList
                  list={this.state.list}
                  handleListing={this.handleListing}
                  {...props}
                />
              </React.Fragment>
            )} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
