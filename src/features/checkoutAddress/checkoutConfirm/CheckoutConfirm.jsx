import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutConfirm = () => {
  return (
    <div>
      <Link to="/checkout/payment" className="text-primary" >
        Before
      </Link>
      <h1 className="text-white">CheckoutConfirm View</h1>
      {/* <Link to="/checkout/address" className="text-primary" >
        Next
      </Link> */}
    </div>
  )
}

export default CheckoutConfirm
