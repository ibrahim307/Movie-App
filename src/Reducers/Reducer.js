import { ADD_MOVIE, DELETE_MOVIE,SEARCH_MOVIE,EDIT_MOVIE,SEARCH_RATING} from "../Consts/Actions-type"
import {movies} from '../Component/Data'

const inialState={listTab:movies,
    inputSearch:"",
    rate:0}
const listReducers=(state=inialState,action)=>{
    switch(action.type){
        case ADD_MOVIE:
            return {...state,listTab:[...state.listTab,action.payload]}
            // return state.concat({state:action.payload})
        case DELETE_MOVIE:
            return {...state,listTab:state.listTab.filter((el,i)=>(i!==action.payload))}
            case SEARCH_MOVIE:
                return {...state,inputSearch:action.payloadName}
                case EDIT_MOVIE:
                    return{...state,listTab:state.listTab.map((el,i)=>i===action.payloadIndex?{...action.payloadNewMovie}:el)}
                    // je prend une copie de state et j'accede au listtab pour mapper sur ses element el par el avec leurs index i 
                    // et si un index i de ceux films là est egale a l'index de l'action que je l'ai effectuer sur un de ceux film
                    // on va prendre  
                    case SEARCH_RATING:
                        return{...state,rate:action.payload}
  default: return state
}
}
export default listReducers