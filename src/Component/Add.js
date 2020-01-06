import React,{Component} from 'react'
class Add extends Component{
    constructor(props){
        super(props)
        this.state={
             name:'',
             date:'',
             image:'',
             rate:''
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    editDate=(e)=>{
      
      this.setState({
        date:e.target.value
      })
    
      
    }
    render(){
        return(
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
       <input className="input-title" type="text" placeholder="Enter the Title of the movie" onChange={this.onChange} value={this.state.title} name='name'/><br/>
       <input className="input-date" type="text" placeholder="Enter the date" onChange={this.editDate} value={this.state.date} name='date'/><br/>
       <input type="text" className="input-image" placeholder="Enter the url of the movie" onChange={this.onChange} value={this.state.image} name='image'/><br/>
       <input type="text" className="input-rate" placeholder="Enter the rating of the movie" onChange={this.onChange} value={this.state.rate} name='rate'/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" onClick={()=>this.props.addFilm(this.state)} class="btn btn-primary" data-dismiss="modal">Add Movies</button>
      </div>
    </div>
  </div>
</div> 

            </div>
        )
    }
}
export default Add