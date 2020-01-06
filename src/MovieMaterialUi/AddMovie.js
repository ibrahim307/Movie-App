import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addMovie } from "../Actions/Action";
import { connect } from 'react-redux'


const AddMovie=(props)=>{
       const [name,setName]=useState('');
       const [date,setDate]=useState('');
       const [image,setImage]=useState('');
       const [Rate,setRate]=useState('');
       const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
      
    return(
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add Movie
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Movie</DialogTitle>
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
             <TextField
              autoFocus
              margin="dense"
              name="rate"
              label="Rate"
              type="text"
              fullWidth
              placeholder="Enter the rating of the movie"
              onChange={e => setRate(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>{props.addFilm({name,date,image,Rate});handleClose()}} color="primary">
              Add Movie
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  const mapDispatchToProps = dispatch => {
    return {
      addFilm: payload => {
        dispatch(addMovie(payload));
      }
    };
  };
export default connect(null,mapDispatchToProps)(AddMovie)