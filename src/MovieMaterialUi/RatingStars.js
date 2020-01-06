import React from 'react'
import Rating from '@material-ui/lab/Rating';
import {Typography,Box} from '@material-ui/core';
import {connect} from "react-redux"
import {searchRating} from '../Actions/Action'





const RatingStars=(props)=>{
return(
    <div>
        <Box component="fieldset" mb={0} borderColor="transparent">
        <Typography component="legend" variant="h6">Rating</Typography>
        <Rating   onChange={(e)=>props.rating(e.target.value)}/>
      </Box>
    </div>
)
}
const mapDispatchToProps=dispatch=>{
  return{
    rating:payload=>{
      dispatch(searchRating(payload))
    }
  }
}
export default connect(null,mapDispatchToProps)(RatingStars)