/**
 * API Docs: https://developers.giphy.com/docs/
 * api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI
 *
 * TO DO
 * - better error mng
 *
 */
import React, { Component } from "react";

class Upload extends Component {
  state = {
    selectedFile: null,
    errorMsg: null,
    successMsg: null
  };

  fileSelectedHandler = ev => {
    this.setState({
      selectedFile: ev.target.files[0]
    });
  };

  /**
   * Handles error messages
   */
  generateErrorMsg = info => {
    let newError = (
      <div className="alert alert-danger my-0 py-2" role="alert">
        <p>A aparut o eroare:</p>
        <p>{info}</p>
      </div>
    );

    this.setState({ errorMsg: newError, successMsg: null });
  };

  /**
   * Handles success messages
   */
  generateSuccessMsg = id => {
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI`;

    fetch(url)
      .then(res => res.json())
      .then(info => {
        let newSuccess = (
          <div className="alert alert-succes my-0 py-2" role="alert">
            <p>The image has been uploaded!</p>
            <p>ID: {id}</p>
            <iframe
              src={info.data.embed_url}
              width="480"
              height="460"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
            <p>
              <a href={info.data.url}>via GIPHY</a>
            </p>
          </div>
        );
        this.setState({ errorMsg: null, successMsg: newSuccess });
      });
  };

  /**
   * Handles the file upload fetching to Giphy API
   */
  fileUploadHandler = ev => {
    ev.preventDefault();

    const url = `https://upload.giphy.com/v1/gifs?api_key=JU6K8LiJFWg6ububq0idHxB0yo7IBEXI`;

    const formData = new FormData();

    formData.append("file", this.state.selectedFile);

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(payload => {
        console.log(payload);
        // Daca exista erori
        if (payload.meta.status !== 200) {
          let info = `Status: ${payload.meta.status}; Message: ${
            payload.meta.msg
          }`;
          this.generateErrorMsg(info);
        }
        // Daca nu exista erori
        else {
          this.generateSuccessMsg(payload.data.id);
        }
      })
      // Alta eventuala eroare
      .catch(err => {
        this.generateErrorMsg(err.message);
        console.dir(err);
      });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          {this.state.errorMsg || null}

          {this.state.successMsg || null}

          <div className="form-group">
            <label htmlFor="foto" className="col-form-label">
              Select an animated Gif:
            </label>
            <input
              type="file"
              onChange={this.fileSelectedHandler}
              id="foto"
              name="foto"
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.fileUploadHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
