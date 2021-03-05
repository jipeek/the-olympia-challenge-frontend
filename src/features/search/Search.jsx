import React from 'react'
import { Link } from 'react-router-dom'
import InputSearch from '../../globalComponents/InputSearch/InputSearch'
import NavMenu from '../../globalComponents/NavMenu/NavMenu'

const Search = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-row items-center justify-between w-full mb-4 relative h-15 rounded mb-6">
        <InputSearch placeholder="Buscar en Jippek" autoFocus={true} />
        <Link to="/home" className="text-primary text-sm mx-2" >
          Cancelar
        </Link>
      </div>
      <h1 className="text-white">Search View</h1>
      <Link to="/search/results" className="text-primary text-sm mx-2" >
        Results
      </Link>
      <NavMenu />
    </div>
  )
}

export default Search
