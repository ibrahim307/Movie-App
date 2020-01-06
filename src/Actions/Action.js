import {ADD_MOVIE,DELETE_MOVIE,SEARCH_MOVIE,EDIT_MOVIE,SEARCH_RATING} from '../Consts/Actions-type'

export const addMovie=movie=>{
    return{
        type:ADD_MOVIE,
    payload:movie}}
export const deleteMovie=(id)=>{
    return{
        type:DELETE_MOVIE,
        payload:id
    }
}
export const searchMovie=(theEnterMovie)=>{
    return{
        type:SEARCH_MOVIE,
        payloadName:theEnterMovie
}}
export const editMovie=(id,newMovie)=>{
    return{
        type:EDIT_MOVIE,
        // payloadIndex c'est l'index de l'element(movie) que je vais cliquer dessus 
        // on peut dire aussi qu'il va prendre l'index de film que je vais faire l'action dessu
        payloadIndex:id,
        payloadNewMovie:newMovie
    }
}
export const searchRating=(rate)=>{
    return{
        type:SEARCH_RATING,
        payload:rate,
        
    }
}