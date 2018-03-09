// Action types
export const GET_DATA = "GET_DATA"
export const FILTER_DATA_FROM_TEXTBOX = "FILTER_DATA_FROM_TEXTBOX"

//Initial state
export const INITIAL_STATE = {
  ui: {
    lastSearchedUser: "",
    lastSearchedUserTime: ""
  },
  data: {
    user: {
      username: "rohitcolinrao",
      repos: []
    }
  }
}
