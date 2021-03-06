import React from 'react'
import { Link } from 'react-router-dom'
import InputSearch from '../../globalComponents/InputSearch/InputSearch'
import NavMenu from '../../globalComponents/NavMenu/NavMenu'

import TacksSearch from '../../globalComponents/TacksSearch/TacksSearch'

const Search = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-row items-center justify-between w-full relative h-15 rounded">
        <InputSearch placeholder="Buscar en Jippek" autoFocus={true} />
        <Link to="/home" className="text-sm mx-2 text-colorplaceholder font-semibold" >
          Cancelar
        </Link>
      </div>
      <h1 className="text-colorplaceholder text-normal font-medium pb-2.5">Búsquedas populares</h1>
      <div className="flex justify-between mb-5">
        <TacksSearch className="" title={'Setup'} />
        <TacksSearch className="" title={'Accesorios oficina'} />
        <TacksSearch className="" title={'Snacks'} />
      </div>
      <div className="flex justify-between">
        <TacksSearch className="" title={'Luces led RGB'} />
        <TacksSearch className="" title={'Mouse Apple'} />
        <TacksSearch className="" title={'Computador'} />
      </div>
      <Link to="/search/results" className="text-primary text-sm mx-2" >
        Results
      </Link>
      <NavMenu />
    </div>
  )
}

export default Search;
