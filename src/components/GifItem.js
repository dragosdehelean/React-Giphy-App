import React from "react";
import propTypes from "prop-types";

const GiftItem = ({ gif, inCollection, toggleCollection }) => {
  const label = inCollection
    ? "Remove from MyCollection"
    : "Add to MyCollection";
  const labelClass = inCollection
    ? "btn btn-outline-danger active btn-block"
    : "btn btn-success btn-block";

  return (
    <React.Fragment>
      <div className="card mb-4 shadow-sm" data-toggle="modal" data-target="#exampleModalLong">
        <img
          className="card-img-top img-fluid"
          src={gif.images.fixed_width.url}
          alt={gif.title}
          title={gif.title}
        />
        <div className="card-body">
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className={labelClass}>
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
            <strong>ID:</strong> {gif.id} | <strong>Rating:</strong>{" "}
            {gif.rating}
          </li>
          <li className="list-group-item">
            <strong>Import_datetime:</strong> {gif.import_datetime}
          </li>
        </ul>
      </div>

      {/* Modal Test */}

      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...Test</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>            
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

GiftItem.propTypes = {
  gif: propTypes.object.isRequired,
  inCollection: propTypes.bool.isRequired,
  toggleCollection: propTypes.func.isRequired
};

export default GiftItem;
