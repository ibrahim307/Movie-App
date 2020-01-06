import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props){
        super(props)
        this.state={
            rate:'',
            image:'',
            name:'',
            date:''
        }
    }
    handleChange=(e)=>{
        [e.target.name]=e.target.value
    }
    render() {
        return (
           
                <div className="container-addMovies">
               
               <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                 Add New Movies
               </button>
               
               
               <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div class="modal-dialog" role="document">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="exampleModalLabel">Adding Films</h5>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                       </button>
                     </div>
                     <div class="modal-body">
                      <input onChange={this.handleChange} value={this.state.rate}  name="rate"  /><br/>
                      <input onChange={this.handleChange} value={this.state.image} name="image"/><br/>
                      <input onChange={this.handleChange} value={this.state.name} name="name"/><br/>
                      <input onChange={this.handleChange} value={this.state.date} name="date"/>
                     </div>
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                       <button   onClick={this.addFilm(this.state)} class="btn btn-primary" data-dismiss="modal">Add Movies</button>
                     </div>
                   </div>
                 </div>
               </div> 
               
                           </div>
            
        )
    }
}
