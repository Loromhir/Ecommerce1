import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../DATA';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'

const ProductDetail = () => {
  
  const [cartBtn, setCartBtn] = useState('Agregar al carrito');
  const productId = useParams();
  const productDetail= DATA.filter(e=>e.id== productId.id);
  const product= productDetail[0]

    const dispatch= useDispatch()

    const handleCart= (product)=>{
            if (cartBtn === 'Agregar al carrito') {
                dispatch(addItem(product))
                setCartBtn('Quitar del carrito')
            }else{
                dispatch(delItem(product))
                setCartBtn('Agregar al carrito')
            }
    }

    return (
   <>
    <div className="container my-5 py-3">
        <div className="row">
            <div className="com-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} alt={product.title} width='400px' />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr />
                <h2 className='my-4'>{product.price}</h2>
                <p className="lead mb-4">{product.desc}</p>
                <button onClick={()=>handleCart(product)} className='btn btn-outline-primary'>{cartBtn}</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default ProductDetail