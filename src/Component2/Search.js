import React, { Component } from 'react'
import UpdatedComponent from './Component/Spinner'

 class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            inputSearch:''
        }
    }
    handleChange=(e)=>{
        this.setState({
        inputSearch:e.target.value
    }),()=>{this.props.searchMovie(inputSearch)}
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} />

            </div>
        )
    }
}
export default UpdatedComponent(Search);