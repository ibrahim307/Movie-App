import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { deleteMovie } from "../Actions/Action";
import RatingStars from "../MovieMaterialUi/RatingStars";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import Description from "./Description";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Pagination from "material-ui-flat-pagination";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    width: 40,
    height: 50
  },
  Paper: { padding: 80, marginTop: 14, marginBottom: 10, width: "90%" },
  button: {
    margin: 5,
    width:50,
    height:40,
  }
}));

const theme = createMuiTheme();

const Body = props => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm style={{ marginTop: 15, marginLeft: 30, marginBottom: 15 }}>
        <Paper className={classes.Paper}>
          <RatingStars />
          <AddMovie />
        </Paper>
      </Grid>

      <Paper
        style={{
          display: "flex",
          flexWrap: "Wrap",
          padding: 20,
          marginTop: 30,
          marginBottom: 10,
          width: "70%"
        }}
      >
        {props.listMovies
          .filter(
            el =>
              el.name
                .toLowerCase()
                .includes(props.searchingMovie.toLowerCase()) &&
              props.searchRating <= el.Rate
          )
          .map((el, i) => (
            <Grid item sm key={i} style={{ paddingLeft: 8, width: 250 }}>
              <Card
                style={{
                  width: 250,
                  height: 340,
                  marginBottom: 15,
                  border: "solid red"
                }}
              >
                <CardContent>
                  <Rating name="read-only" value={el.Rate} readOnly />
                  <Typography style={{ fontSize: 14 }} color="textSecondary">
                    {el.name}-{el.date}
                  </Typography>
                </CardContent>
                <CardMedia
                  style={{ height: 200, paddingTop: "56.25%" }}
                  image={el.image}
                  title={el.name}
                />
                <div className="d-flex flex-wrap">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => props.remove(i)}
                  />
                  <EditMovie
                    variant="contained"
                    color="secondary"
                    className="movie-btn"
                    startIcon={<EditIcon />}
                    element={el}
                    index={i}
                  />
                  <Link to={`/description/${i}`}>
                    
                    <Button
                      // variant="contained"
                      color="secondary"
                      className={classes.button}
                      name="Description"
                    >
                      Description
                    </Button>
                  </Link>
                </div>

                <BrowserRouter className="App">
                  <Switch>
                    <Route path="/Description/:id" component={Description} />
                  </Switch>
                </BrowserRouter>
              </Card>
            </Grid>
          ))}
        <Grid />
        
      </Paper>
    </Grid>
  );
};
const mapStateToProps = state => {
  return {
    listMovies: state.listTab,
    searchingMovie: state.inputSearch,
    searchRating: state.rate
  };
};
const mapDispatchToProps = dispatch => {
  return {
    remove: payload => {
      dispatch(deleteMovie(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Body);

