import React,{Component} from 'react'
import {Movies} from './data'
import Search from './Search'
class App extends Component{
constructor(props){
    super(props)
    this.state={
          Movies:Movies,
          inputSearch:''
    }
}
addMovie=(newMovie)=>{
   this.setState({
       Movies:[...this.state.Movies,newMovie]
   })
}
searchMovie=(x)=>{
    this.setState({
        inputSearch:x
    })
}
render(){
    return(
        <div>
            <Search searchMovie={this.searchMovie} />
            <List Movies={this.state.Movies} inputSearch={this.state.inputSearch}/>
            <Add Add={this.addMovie}/>
        </div>
    )
}
}
export default App