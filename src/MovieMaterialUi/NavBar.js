import React from 'react'
import {AppBar,Toolbar,Typography,InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import {searchMovie} from '../Actions/Action'
import { connect } from 'react-redux';




const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
      
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
        marginLeft: theme.spacing(2),
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


const Navbar=(props)=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor:"#2A4466"}}>
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
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
            search:payload=>{
              dispatch(searchMovie(payload))
            }
    }
  }
export default connect(null,mapDispatchToProps) (Navbar)