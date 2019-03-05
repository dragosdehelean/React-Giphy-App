import React from "react";
import GifList from "./GifList";
import propTypes from "prop-types";

const MyCollection = ({ myCollection, onToggleCollection }) => {
  return (
    <div className="row">
      <GifList gifs={myCollection} onToggleCollection={onToggleCollection} />
    </div>
  );
};

MyCollection.propTypes = {
  myCollection: propTypes.arrayOf(propTypes.object),
  onToggleCollection: propTypes.func.isRequired
};

export default MyCollection;
