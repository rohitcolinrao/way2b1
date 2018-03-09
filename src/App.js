import React, { Component } from 'react'
import './App.css'
import {GithubSearch} from "./containers/GithubSearch"

class App extends Component {
  render() {
    return (
      <div id="container">
        <GithubSearch {...this.props} />
      </div>
    )
  }
}

export default App
