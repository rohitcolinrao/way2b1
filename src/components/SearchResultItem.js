import React from "react"
import PropTypes from "prop-types"

const SearchResultItem = (repo) => (
  <article className="card1 col-xs-6 col-sm-4 col-lg-3">
		<div className="title">{repo.name}</div>
  </article>
)
SearchResultItem.propTypes = {
  name: PropTypes.string.isRequired
}
export default SearchResultItem
