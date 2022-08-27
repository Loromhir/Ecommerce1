import React from 'react'
import { useSelector } from 'react-redux'


const CheckOut = () => {
   
   const state= useSelector(state=> state.addItem.cart)
    var total= 0;
    return (
        <div className='container'>
            <div className='row g-5'>

                <div className='col-md-4 order-md-2 mb-4'>
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">{state.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                       {state.map((item)=>{
                        total= total +item.price
                            return(
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">{item.title}</h6>
                                   
                                </div>
                                <span className="text-muted">${item.price}</span>
                            </li>
                            )
                       })}
                       
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${total}</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='col-md-8 order-md-1'>
                    <h4 className='mb-3'> Direccion de pago</h4>
                    <form className='needs-validation'>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">Primer nombre</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Se requiere validar el primer nombre.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Apellido</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Se requiere validar el apellido.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username">Nombre de usuario</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                                <div className="invalid-feedback">
                                    Se requiere un usuario
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted">(Opcional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                            Ingrese una dirección de correo electrónico válida para actualizaciones de envío.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Direccion</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                            <div className="invalid-feedback">
                            Por favor introduzca su direccion de envio.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">Direccion 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Pais</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                    <option >Elije...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Elije un pais
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">Estado / Provincia</label>
                                <select className="custom-select d-block w-100" id="state" required="">
                                    <option value="">Elije...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Elija un Estado / Provincia
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">CP</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Se requiere Codigo postal
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" htmlFor="same-address">La dirección de envío es la misma que mi dirección de facturación</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlFor="save-info">Guarda esta información para la próxima vez</label>
                        </div>
                        <hr className="mb-4" />

                        <h4 className="mb-3">Pago</h4>

                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                <label className="custom-control-label" htmlFor="credit"> Tarjeta de crédito</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                <label className="custom-control-label" htmlFor="debit"> Tarjeta de débito</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                <label className="custom-control-label" htmlFor="paypal"> PayPal</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-name">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                <small className="text-muted">Nombre completo como se muestra en la tarjeta</small>
                                <div className="invalid-feedback">
                                Se requiere el nombre en la tarjeta
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-number">Número de Tarjeta de Crédito</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                <div className="invalid-feedback">
                                Se requiere número de tarjeta de crédito
                                                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">Fecha de vencimiento</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                <div className="invalid-feedback">
                                Fecha de vencimiento requerida                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-cvv">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Codigo de seguridad requerida
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Continuar con el pago</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOut