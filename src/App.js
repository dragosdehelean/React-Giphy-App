import React, { Component } from "react";
import GifList from './components/GifList';

class App extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    /**
     * API Docs: https://developers.giphy.com/docs/
     * https://api.giphy.com/v1/gifs/trending?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI
     * */
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI&limit=9&offset=20")
      .then(res => res.json())
      .then(data =>{
        this.setState({gifs: data.data})
      })
      .catch(error => console.log(error));
  }
  render() {
    console.dir(this.state.gifs);
    return (
      <div className="container">
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
