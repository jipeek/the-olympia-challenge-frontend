import React from 'react'
import { Link } from 'react-router-dom'

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
    </div>
  )
}

export default CheckoutPayment
