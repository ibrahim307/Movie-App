import React,{Component} from 'react'
import {connect} from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {editMovie} from '../Actions/Action'



class EditMovie extends Component{
    constructor(props){
        super(props)
        this.state={
             name:"",
             image:"",
             date:"",
             Rate:""
        }
    }
    getMovie=()=>{
      this.setState({
        name:this.props.element.name,
        image:this.props.element.image,
        date:this.props.element.date,
        Rate:this.props.element.Rate
      })
    }
    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    showModal = () => {
      this.setState({
          modal : true
      })
  }
    
    toggle= () => {
      this.setState({
         modal : !this.state.modal
     })
}
setMovie=(id)=>{
  let movie={name:this.state.name,
    image:this.state.image,
    date:this.state.date,
    Rate:this.state.Rate,
  }
  this.props.edit(id,movie)
}
    
    render(){
        return(
          <div>

          <Button color="danger" onClick={()=>{this.getMovie();this.toggle()}}>Edit Movie</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}  >
                  <ModalHeader toggle={this.toggle}>Edit Movie</ModalHeader>
                  <ModalBody>
                        
                
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="insert the name of the movie"/>
                  <input type="text" name="date" value={this.state.date} onChange={this.handleChange} placeholder="insert the date of th movie "/>
                  <input type="text" name="image" value={this.state.image} onChange={this.handleChange} placeholder="insert the image of th movie"/>
                  <input type="text" name="Rate" value={this.state.Rate} onChange={this.handleChange} placeholder="insert the rate of th movie"/>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={()=>{this.setMovie(this.props.index);this.toggle()}}>Save</Button>

                    {/* index is the index of the movie in the list.js that we send it as a props to this component  */}

                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                </div>  )
    }}
    const mapDispatchToProps=(dispatch)=>{
      return {
        edit:(id,newMovie)=>{
          dispatch(editMovie(id,newMovie))
        }
      }
    }

export default connect(null,mapDispatchToProps)(EditMovie)