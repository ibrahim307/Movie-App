import React from 'react'
import {connect} from "react-redux"

const Description = (props) => {
    console.log(props.match.params.id)
        return (
        
       
        props.listMovies.map((e,i)=>i===Number(props.match.params.id)&& <div key={i }><img src={e.image} alt="."/> <h2>{e.name}</h2> <span>{e.date}</span></div> )
     
    )
}

const mapStateToProps=(state)=>{
   return{ listMovies:state.listTab}
}

export default connect(mapStateToProps ) (Description)