import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutAddress = () => {
  return (
    <div>
      <Link to="/cart" className="text-primary" >
        Before
      </Link>
      <h1 className="text-white">CheckoutAddress View</h1>
      <Link to="/checkout/payment" className="text-primary" >
        Next
      </Link>
    </div>
  )
}

export default CheckoutAddress
