import {combineReducers} from "redux"
import githubSearchReducer from "./githubSearch"

const reducers = combineReducers({
  githubSearch: githubSearchReducer
})

export default reducers
