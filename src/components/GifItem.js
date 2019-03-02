import React from "react";
import propTypes from "prop-types";

const GiftItem = ({ gif, inCollection, toggleCollection }) => {

  const label = inCollection ? "Remove from MyCollection" : "Add to MyCollection";
  const labelClass = inCollection ? "btn btn-outline-danger active btn-block" : "btn btn-success btn-block";
  
  
  return (
    <div className="card mb-4 shadow-sm">
      <img
        className="card-img-top img-fluid"
        src={gif.images.fixed_width.url}
        alt={gif.title}
        title={gif.title}
      />
      <div className="card-body">      
        <div className="btn-group-toggle" data-toggle="buttons">
          <label className={labelClass} >
            <input
              type="checkbox"       
              checked={inCollection}
              onChange={toggleCollection}
              
            /> 
            {label}
          </label>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        {gif.username ? (
          <li className="list-group-item">
            <strong>Username:</strong> {gif.username}
          </li>
        ) : null}

        <li className="list-group-item">
          <strong>ID:</strong> {gif.id} | <strong>Rating:</strong> {gif.rating}
        </li>
        <li className="list-group-item">
          <strong>Import_datetime:</strong> {gif.import_datetime}
        </li>
      </ul>
    </div>
  );
};

GiftItem.propTypes = {
  gif: propTypes.object.isRequired,
  inCollection: propTypes.bool.isRequired,
  toggleCollection: propTypes.func.isRequired
};

export default GiftItem;
