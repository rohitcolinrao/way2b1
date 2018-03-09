import React, { Component } from 'react'
import { connect } from "react-redux"
import * as types from "../constants/Constants"
import SearchForm from "../components/SearchForm"
import {SearchResults} from "./SearchResults"

class GithubSearchComponent extends Component {
  constructor(props){
    super(props)
    this.onFormChanged = this.onFormChanged.bind(this)
  }

  render(){
    return (
      <section id="restaurant-search" className="container">
        <header><strong>Way2b1</strong> Github User Search</header>
        <SearchForm onKeyUp={this.onFormChanged} placeHolderVal="Search for a user"/>
        <SearchForm onKeyUp={this.onFormChanged2} placeHolderVal="Filter repos"/>
        <SearchResults />
      </section>
    )
  }

  onFormChanged(e){
    let searchString = e.target.value.toLowerCase()
    this.props.dispatch({type: types.GET_DATA, searchString})
  }

  // onForm2Changed(e){
  //   let searchString = e.target.value.toLowerCase()
  //   this.props.dispatch({type: types.FILTER_DATA_FROM_TEXTBOX, searchString})
  // }

}

const mapStateToProps = (state) => {
  return {
    user: state.githubSearch.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}


export const GithubSearch = connect(mapStateToProps, mapDispatchToProps)(GithubSearchComponent)
