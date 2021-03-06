import React from 'react'
import { Link } from 'react-router-dom'

import TypeCards from '../../globalComponents/TypeCards/TypeCards';
import Visa from "../../static/cards/Visa.svg";
import Mastercard from "../../static/cards/Mastercard.svg";
import Amex from "../../static/cards/AmericaExpress.svg";
import Pse from "../../static/cards/Pse.svg";
import Efecty from "../../static/cards/Efecty.svg";

const CheckoutPayment = () => {
  return (
    <div>
      <Link to="/checkout/address" className="text-primary" >
        Before
      </Link>
      <h1 className="text-white">checkoutPayment View</h1>
      <Link to="/checkout/confirm" className="text-primary" >
        Next
      </Link>
      <div className="flex flex-row justify-around ">
          <TypeCards img={Visa} />
          <TypeCards img={Mastercard} />
          <TypeCards img={Amex} />
          <TypeCards img={Pse} />
          <TypeCards img={Efecty} />
      </div>
    </div>
  )
}

export default CheckoutPayment
