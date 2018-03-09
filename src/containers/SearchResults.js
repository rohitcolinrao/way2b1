import React from "react"
import { connect } from "react-redux"
import SearchResultItem from "../components/SearchResultItem"

const SearchResultsComponent = ({repos}) => (
  <section className="container">
    <div className="user-info">

    </div>
    <div className="flex-row">
      {repos.map(repo => (
          <SearchResultItem
            key={repo.name}
            {...repo}
          />
      ))}
      </div>
  </section>
)

export const SearchResults = connect(state => ({
  user: state.githubSearch.data.user.username,
  repos: state.githubSearch.data.user.repos
}), {})(SearchResultsComponent)
