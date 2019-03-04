/**
 * API Docs: https://developers.giphy.com/docs/
 * api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI
 */
import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MyCollection from "./components/MyCollection"
import Upload from "./components/Upload";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    gifs: [],
    myCollection: []
  };

  /**
   * Checks if a gif's ID is in Mycollection
   */
  isInCollection = id => {
    return this.state.myCollection.map(gif => gif.id).indexOf(id) === -1
      ? false
      : true;
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
   * When the serch term changes, fetches for a new set gifs
   */
  handleOnSearchChange = searchTerm => {
    console.log(searchTerm);
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI&q=" +
      searchTerm +
      "&limit=12";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ gifs: json.data });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    /**
     * Populates Show Images with default data (without search) - trending gifs
     * https://api.giphy.com/v1/gifs/trending?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI
     */
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI&limit=12"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({ gifs: json.data });
      })
      .catch(error => console.log(error));
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
                />
              )}
            />
            <Route path="/mycollection" component={MyCollection} />
            <Route exact path="/upload" component={Upload} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
