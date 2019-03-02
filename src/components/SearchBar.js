import React from "react";
import propTypes from "prop-types";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  console.log(searchTerm);
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
              value={searchTerm}
              onChange={onSearchChange}
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
};

SearchBar.propTypes = {
  onSearchChange: propTypes.func.isRequired,
  searchTerm: propTypes.string.isRequired
};

export default SearchBar;
