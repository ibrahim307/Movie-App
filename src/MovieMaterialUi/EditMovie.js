import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/core/styles";
import { editMovie } from "../Actions/Action";
import { connect } from 'react-redux'
const useStyles = makeStyles(theme => ({button: {
    margin: theme.spacing(1),
  }, }))





  const AddMovie=(props)=>{
       const [name,setName]=useState('');
       const [date,setDate]=useState('');
       const [image,setImage]=useState('');
      //  const [rate,setRate]=useState('');
       const [open, setOpen] =useState(false);
       const classes = useStyles(); 

      
  
    const   handleClickOpen = () => {
    setOpen(true);
  };

  
  
  const handleClose = () => {
    setOpen(false);
  };
  
  
  const getMovie=()=>{
      setName(props.element.name)
      setImage(props.element.image)
      setDate(props.element.date)
  } 
  
  

    
  
   
  
  
  return(
        
        <div>
        {/* <Button variant="outlined" color="primary" onClick={()=>{getMovie();handleClickOpen()}}>
          Edit Movie
        </Button> */}
        <Button variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<EditIcon />} onClick={()=>{getMovie();handleClickOpen()}}></Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Movie</DialogTitle>
          <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Title"
              type="text"
              fullWidth
              placeholder="Enter the Title of the movie"
              onChange={e => setName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              name="date"
              type="date"
              fullWidth
              placeholder="Enter the date of the movie"
              onChange={e => setDate(e.target.value)}
            />
             <TextField
              autoFocus
              margin="dense"
              name="image"
              label="Link"
              type="text"
              fullWidth
              placeholder="Enter the url of the movie"
              onChange={e => setImage(e.target.value)}
            />
              
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>{props.edit(props.index,{name,image,date});handleClose()}} color="primary">
              Edit Movie
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  const mapDispatchToProps=(dispatch)=>{
    return {
      edit:(id,newMovie)=>dispatch(editMovie(id,newMovie))
      
    }
  }
export default connect(null,mapDispatchToProps)(AddMovie)