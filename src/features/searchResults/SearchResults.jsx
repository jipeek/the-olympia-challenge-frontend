import React from 'react'
import { Link } from 'react-router-dom'

const SearchResults = () => {
  return (
    <div>
      <h1 className="text-white">SearchResults View</h1>
      <Link to="/search/filters" className="text-primary" >
        Filtrar
      </Link>
    </div>
  )
}

export default SearchResults
