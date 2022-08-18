import React from 'react'

const Login = () => {
    return (
        <>

            <button type="button" className="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#loginModal">
            <span className='fa fa-sign-in me-2'></span>  Login
            </button>

            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel"> Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className='btn btn-outline-primary w-100 mb-3'>
                               <span ><i className="fa fa-google me-2" aria-hidden="true"></i>
                                     Sing in with Google</span> 
                            </button>
                            <button className='btn btn-outline-primary w-100 mb-3'>
                               <span ><i className="fa fa-facebook me-2" aria-hidden="true"></i>
                                     Sing in with FaceBook</span> 
                            </button>
                            <div className="mb-3 row">
                                <label htmlFor="inputText" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputText" placeholder="email@example.com"/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input sm-3" id="check1"/>
                                    <label htmlFor='check1' className='form-check-label'>Check me out</label>
                                </div>
                                <button type="submit" className="fa-solid btn btn-outline-primary w-100 mt-3">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login