import React from "react";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import Pagination from "./Pagination"
import propTypes from "prop-types";

const Home = ({ onSearchChange, gifs, isInCollection, onToggleCollection }) => {
  return (
    <React.Fragment>     
      <div className="row justify-content-center my-3">
        <SearchBar onSearchChange={onSearchChange} />
      </div>
      <div className="row">
        <Pagination />
      </div>
      <div className="row">
        <GifList
          gifs={gifs}
          isInCollection={isInCollection}
          onToggleCollection={onToggleCollection}
        />
      </div>
      
    </React.Fragment>
  );
};

Home.propTypes = {
  onSearchChange: propTypes.func.isRequired,
  gifs: propTypes.arrayOf(propTypes.object),
  onToggleCollection: propTypes.func.isRequired,
  isInCollection: propTypes.func.isRequired,
};

export default Home;
