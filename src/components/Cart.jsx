import React from "react"
import { delItem } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Cart = () => {

    const state = useSelector(state => state.addItem.cart)
    const dispatch = useDispatch()
    const handleClose = (item) => { dispatch(delItem(item)) }
   
    return (    
        <div>
            {state.length === 0 &&  
        <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
              <div className="row">
                <h3>Tu carrito esta vacío</h3>
                </div>
              </div>
        </div>
            }
            {state.length !== 0 && state.map( (cartItem) => {return(
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">
                <button onClick={()=>{handleClose(cartItem)}} className="btn-close floar-end" aria-label='close'></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.img} className="card-img-top" alt={cartItem.title} />
                    </div>
                    <div className="col-md-4">
                        <h3>{cartItem.title}</h3>
                        <p className="lead fw-bold">${cartItem.price}</p>
                        <p>{cartItem.desc}</p>
                    </div>
                </div>
            </div>
        </div> )})
        }
        {state.length !== 0 && 
            <div className="container">
            <div className="row">
                <NavLink to={'/checkout'} className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceda al pago</NavLink>
            </div>
            </div>}
        </div>
    )
}

export default Cart