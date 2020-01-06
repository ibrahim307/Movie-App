import React, {useState,useEffect } from "react";








const UpdatedComponent = OriginalComponent => {
 const NewComponent=(props)=>{
   const [loading,setLoading]=useState("true")
    
    // componentDidMount = () =>
    //   setTimeout(() => {
    //     this.setState({
    //       loading: false
    //     });
    //   },2000);

    useEffect(
        ()=>{
          setTimeout(() => {
          setLoading(false)
          },1000); 
        }
      )
    
      if(loading===false){
        return <OriginalComponent {...props}/>
    }
    else{
        return(<div class="d-flex justify-content-center">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      )
    }
    }
  
  return NewComponent;
  }
export default UpdatedComponent;
