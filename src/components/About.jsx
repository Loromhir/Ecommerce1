import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="lead mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet debitis possimus architecto. 
            Non totam voluptatem ducimus eaque tempore nulla suscipit illum dolore a fuga. Corporis aspernatur sunt labore 
            doloribus quas?</p>
            <NavLink to='/contact' className='btn btn-outline-primary px-3'>Contact Us</NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src="/assets/images/about.jpg" alt="About Us" height='400px' width='400px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About