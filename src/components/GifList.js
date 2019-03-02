import React from "react";
import GifItem from "./GifItem";
import propTypes from "prop-types";

const GiftList = ({ gifs, isInCollection, onToggleCollection }) => {
  return (
    
      <div className="card-columns">
        {gifs.map(gif => (
          <GifItem
            key={gif.id}
            gif={gif}
            inCollection={isInCollection(gif.id)}
            toggleCollection={() => onToggleCollection(gif)}
          />
        ))}
      </div>
  
  );
};

GiftList.propTypes = {
  gifs: propTypes.arrayOf(propTypes.object),
  isInCollection: propTypes.func.isRequired,
  onToggleCollection: propTypes.func.isRequired
};

export default GiftList;
