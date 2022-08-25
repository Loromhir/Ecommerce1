import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as actionCreators from '../../redux/actions/index'
const actions = actionCreators;
const CartBtn = (cart) => {

  return (
    <>
      <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'></span> Cart ({cart.length})
      </NavLink>
    </>
  )
}
const mapStateToProps=(state)=>{
  return{
    cart: state.cart
  }
}
export default connect(mapStateToProps,null) (CartBtn)