import React from 'react'
import Rating from './Rating'
import {connect} from "react-redux"
import {deleteMovie} from '../Actions/Action'
const Card=(props)=>{
    return(
        // Card elle va recu un props element qui contient les el du tab props listMovies est les afficher 
            
       
    )
}
const mapDispatchToProps=dispatch=>{
    return{
        delete:(payload)=>{
            dispatch(deleteMovie(payload))
        }
    }
}
export default connect(null,mapDispatchToProps)(Card)