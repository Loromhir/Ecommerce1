import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet debitis possimus architecto. 
            Non totam voluptatem ducimus eaque tempore nulla suscipit illum dolore a fuga. Corporis aspernatur sunt labore 
            doloribus quas?</p>
            <NavLink to='/contact' className='btn btn-outline-primary'>Contact Us</NavLink>
          </div>
          <div className='col-md-6'>
            <img src="/assets/images/about.jpg" alt="About Us" height='500px' width='500px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About