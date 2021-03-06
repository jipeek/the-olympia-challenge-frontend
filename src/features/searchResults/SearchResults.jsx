import React from 'react'
import { Link } from 'react-router-dom'
import InputSearch from '../../globalComponents/InputSearch/InputSearch'
import CardProductVertical from '../../globalComponents/CardProductVertical/CardProductVertical'

import img from "../../static/61mAKoAsBDL 1.svg"

const SearchResults = () => {
  return (
    <>
      <div className="container mx-auto px-4 border-b-2 border-grey">
        <InputSearch placeholder="Buscar en Jippek" autoFocus={true} />
        <div className="flex justify-between">
          <div className="">
            <Link to="/search/filters" className="text-primary" >Filtrar</Link>
            <Link to="/search/filters" className="text-primary" >Filtrar</Link>
          </div>
          <div className="">
            <Link to="/search/filters" className="text-primary" >Filtrar</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <h1 className="text-white font-title font-medium  text-lg mt-5 mb-5">Resultados</h1>

        <div className="flex flex-row flex-wrap justify-between">
          <CardProductVertical className="mb-5" img={img} title={'Protector de piel para escritorio'} price={'$49.900'} footer={'Envío gratis'}  />
          <CardProductVertical className="mb-5" img={img} title={'Protector de piel para escritorio'} price={'$49.900'} footer={'Envío gratis'}  />
          <CardProductVertical className="mb-5" img={img} title={'Protector de piel para escritorio'} price={'$49.900'} footer={'Envío gratis'}  />
          <CardProductVertical className="mb-5" img={img} title={'Protector de piel para escritorio'} price={'$49.900'} footer={'Envío gratis'}  />
          <CardProductVertical className="mb-5" img={img} title={'Protector de piel para escritorio'} price={'$49.900'} footer={'Envío gratis'}  />
          <CardProductVertical className="mb-5" img={img} title={'Protector de piel para escritorio'} price={'$49.900'} footer={'Envío gratis'}  />
        </div>

      </div>
    </>
  )
}

export default SearchResults
