/**
 * API Docs: https://developers.giphy.com/docs/
 * api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI
 */
import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MyCollection from "./components/MyCollection";
import Upload from "./components/Upload";
import NotFound from "./components/NotFound";

const BASE_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI";
const QUERY_LIMIT = 12;

class App extends Component {
  state = {
    gifs: [],
    currentPage: 0,
    myCollection: localStorage.getItem("myCollection") ? JSON.parse(localStorage.getItem("myCollection")) : [],
    endpoint: BASE_URL + "/trending?" + API_KEY + "&limit=" + QUERY_LIMIT ,
  };

  /**
   * Checks if a gif's ID is in myCollection
   */
  isInCollection = id => {
    return this.state.myCollection.map(gif => gif.id).indexOf(id) === -1 ? false : true;
  };

  /**
   * If the checkbox changes, the gif is added or removed from MyCollection
   */
  handleToggleCollection = gif => {
    // remove
    if (this.isInCollection(gif.id)) {
      this.setState(prevState => ({
        myCollection: prevState.myCollection.filter(item => item.id !== gif.id)
      }));
    } else {
      // add
      this.setState(prevState => ({
        myCollection: [...prevState.myCollection, gif]
      }));
    }
  };

  /**
   * Generic method for fetching for the list of gifs to show on the page
   * @param {string} url The desired API endpoint
   */
  fetchGifs(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.dir(json);
        this.setState({ gifs: json.data });
      })
      .catch(error => console.log(error));
  }

  /**
   * When the serch term changes, fetches for a new set gifs
   */
  handleOnSearchChange = searchTerm => {
    const url =
      BASE_URL +
      "/search?" +
      API_KEY +
      "&q=" +
      searchTerm +
      "&limit=" +
      QUERY_LIMIT;

    this.setState({ endpoint: url, currentPage: 0 });

    this.fetchGifs(url);
  };

  /**
   *  TEST !!
   */
  handlePaginationNext = () => {
    this.setState(prevState => {
      const url = this.state.endpoint + "&offset=" + (prevState.currentPage + 1) * QUERY_LIMIT;
      this.fetchGifs(url);

      return { currentPage: prevState.currentPage + 1 };
    });
  };

  componentDidMount() {
    // Populates Show Images with default data (without search) - trending gifs
    const url = this.state.endpoint + "&offset=" + (this.state.currentPage * QUERY_LIMIT);

    this.fetchGifs(url);
  }

  componentDidUpdate(prevProps, prevState) {
    // if myCollection on the state has changed, updates localStorage
    if (prevState.myCollection.length !== this.state.myCollection.length) {
      localStorage.setItem("myCollection", JSON.stringify(this.state.myCollection));
    }
  }

  render() {
    return (
      <HashRouter basename="/React-Giphy-App">
        <div className="container">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  onSearchChange={this.handleOnSearchChange}
                  gifs={this.state.gifs}
                  isInCollection={this.isInCollection}
                  onToggleCollection={this.handleToggleCollection}
                  // test
                  handlePaginationNext={this.handlePaginationNext}
                />
              )}
            />
            <Route
              path="/mycollection"
              render={() => (
                <MyCollection
                  myCollection={this.state.myCollection}
                  onToggleCollection={this.handleToggleCollection}
                  isInCollection={this.isInCollection}
                />
              )}
            />
            <Route exact path="/upload" component={Upload} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
