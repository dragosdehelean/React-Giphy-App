import React, { Component } from "react";
import propTypes from "prop-types";

class SearchBar extends Component {
  
  state = {
    timeoutId: 0,
    searchTerm: '',
  }  
  /**
   * Handles the change on the search term & triggers a new fetch only after the user stopped typing
   */
  onChangeHandler = (ev) =>{  
    if(this.state.timeoutId){
      clearTimeout(this.state.timeoutId);
    }
    const id = setTimeout(() => {
      this.props.onSearchChange(this.state.searchTerm);
    }, 800);
    this.setState({timeoutId: id,  searchTerm: ev.target.value }); 
  }  

  render() {

    return (
      <div className="col-12 col-md-10 col-lg-8">
        <form className="card card-sm">
          <div className="card-body row no-gutters align-items-center">
            <div className="col-auto">
              <i className="fas fa-search h3 text-body" />
            </div>
            <div className="col">
              <input
                className="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Search for something funny!" 
                value={this.state.searchTerm}               
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchChange: propTypes.func.isRequired,
};

export default SearchBar;
