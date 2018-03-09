import * as types from "../constants/Constants"

const githubSearchReducer = (state = types.INITIAL_STATE, action) => {

  let newState = Object.assign({}, state)

  switch (action.type){

    // DATA
    case types.GET_DATA:
      newState = Object.assign({}, state)
      newState.data = action.data
      return newState

    case types.FILTER_DATA_FROM_TEXTBOX:
      newState.ui.searchString = action.searchString
      filterData()
      return newState

    default:
      return state

  }

  function filterData(){
    // do repo filtering
  }

}

export default githubSearchReducer
