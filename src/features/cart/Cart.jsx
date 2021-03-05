import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <Link to="/home" className="text-primary" >
        Before
      </Link>
      <h1 className="text-white">Cart View</h1>
      <Link to="/checkout/address" className="text-primary" >
        Next
      </Link>
    </div>
  )
}

export default Cart
