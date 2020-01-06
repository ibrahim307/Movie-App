import React from 'react'
import { connect } from 'react-redux'
import {searchRating} from '../Actions/Action'
function Rating(props){
    let stars=[]

    for(let i=0;i<5;i++){
            if(props.Rate>i){
                stars.push(<span onClick={()=>props.searchRate(i+1)}>★</span>)
            }
            else 
                stars.push(<span  onClick={()=>props.searchRate(i+1)}>☆</span>)     
    }
    return(
        <div>{stars}</div>
    )
}
const mapDispatchToProps=dispatch=>{
    return{
      searchRate:(payload)=>{
        dispatch(searchRating(payload))
      }
    }
  }
export default connect(null,mapDispatchToProps) (Rating)