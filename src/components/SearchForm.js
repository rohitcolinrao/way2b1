import React from "react"

const SearchForm = (props) => (
  <section className="search-form">
    <div className="input-group">
      <input className="form-control" placeholder={props.placeHolderVal} type="text" onKeyUp={props.onKeyUp}/>
      <div className="input-group-append">
        <span className="input-group-text"><img className="search-icon" src="/images/search.png" alt="search"/></span>
      </div>
    </div>
  </section>
)
export default SearchForm
