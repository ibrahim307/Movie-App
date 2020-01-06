import React from 'react'
import  Rating from './Rating' 
import{ searchMovie}from '../Actions/Action'
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '70%',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));


const SearchFilter=(props)=> {
  const classes = useStyles();

    return(
        <div>
            <form className="container-form">
          {/* <div>
            <input
              className="input-movie"
              type="text"
              placeholder="Type movie name to search"
              onChange={(e)=>props.search(e.target.value)}
              
            />
            
          </div> */}
          <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>  
        <Typography className={classes.title} variant="h6" noWrap>
            Movie-App
          </Typography>    
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e)=>props.search(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
          
          <div className="container-note">
            <span>Minimun rating</span>
            <span><Rating Rate={props.Rate}/></span>
           
          </div>
        </form>
        </div>
    )
}
const mapStateToProps=(state)=>{
  return {Rate:state.Rate}
}
const mapDispatchToProps=(dispatch)=>{
  return{
          search:payload=>{
            dispatch(searchMovie(payload))
          }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (SearchFilter);