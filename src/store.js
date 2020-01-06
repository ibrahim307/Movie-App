import {createStore} from 'redux'
import listReducers from "../src/Reducers/Reducer"
const store=createStore(listReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store