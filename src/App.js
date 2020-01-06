import React from "react";
// import List from "./Component/List";
import "./Component/Movie.css";
// import SearchFilter from "./Component/SearchFilter";
import UpdatedComponent from "./Component/Spinner";
// import AddMovie from "./ComponentRedux/AddMovie";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./MovieMaterialUi/NavBar";
import Body from "./MovieMaterialUi/Body";
import Description from "./MovieMaterialUi/Description";
// import CardList from "./trying";

const App = () => {
  return (
    <BrowserRouter className="App">
       <NavBar />
      <Switch>
        <Route exact path="/" component={Body}/>
        <Route path="/Description/:id" component={Description}/>
      </Switch>
    </BrowserRouter>
  );
};

export default UpdatedComponent(App);

{
  /* <SearchFilter />
          <List />
          <AddMovie /> */
}
 
{/* <Description
// variant="contained"
color="secondary"
className={classes.button}
name="Description"
/> */}