import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const CartBtn = () => {
  const state= useSelector(state=> state.addItem.cart)
  return (
    <>
      <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'>Cart ({state.length})</span> 
      </NavLink>
    </>
  )
}
export default CartBtn