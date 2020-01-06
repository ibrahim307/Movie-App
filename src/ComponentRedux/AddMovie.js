import React, { useState } from "react";
import { connect } from "react-redux";
import { addMovie } from "../Actions/Action";
const AddMovie = props => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [Rate, setRate] = useState("");

  return (
    <div className="container-addMovies">
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add New Movies
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Adding Films
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input
                className="input-title"
                type="text"
                placeholder="Enter the Title of the movie"
                onChange={e => setName(e.target.value)}
                value={name}
                name="name"
              />
              <br />
              <input
                className="input-date"
                type="text"
                placeholder="Enter the date"
                onChange={e => setDate(e.target.value)}
                value={date}
                name="date"
              />
              <br />
              <input
                type="text"
                className="input-image"
                placeholder="Enter the url of the movie"
                onChange={e => setImage(e.target.value)}
                value={image}
                name="image"
              />
              <br />
              <input
                type="text"
                className="input-rate"
                placeholder="Enter the rating of the movie"
                onChange={e => setRate(e.target.value)}
                value={Rate}
                name="rate"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => props.addFilm(this.state)}
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Add Movies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addFilm: payload => {
      dispatch(addMovie(payload));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddMovie);
