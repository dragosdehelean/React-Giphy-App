import React, { Component } from "react";



class App extends Component {

  state= {
    gifs: []
  }

  componentDidMount(){
  /**
   * API for trending (docs): https://developers.giphy.com/docs/  
   * https://api.giphy.com/v1/gifs/trending?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI
   * 
   * */     
    

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI&limit=6')
      .then(res => res.json())
      .then(data => console.dir(data) )
      .catch(error=> console.log(error))

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                alt="Thumbnail [100%x225]"
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
