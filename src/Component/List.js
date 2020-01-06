import React from "react";
import Rating from "./Rating";
import { connect } from "react-redux";
import { deleteMovie } from "../Actions/Action";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditMovie from "../ComponentRedux/Edit";

function List(props) {
  return (
    <div className="movieContainer">
      {props.listMovies
        .filter(
          el =>
            el.name
              .toLowerCase()
              .includes(props.searchingMovie.toLowerCase()) &&
            props.searchRating <= el.Rate
        )
        .map((el, i) => (
          <div className="movieCard">
            <Rating Rate={el.Rate} />
            <img className="movie-poster" src={el.image} alt="" />
            <span className="movie-title">
              {el.name} - {el.date}
            </span>
            <div className="container-button">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => props.remove(i)}
              >
                Delete
              </Button>
              <EditMovie index={i} element={el} />
            </div>
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    listMovies: state.listTab,
    searchingMovie: state.inputSearch,
    searchRating: state.Rate
  };
};
const mapDispatchToProps = dispatch => {
  return {
    remove: payload => {
      dispatch(deleteMovie(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
