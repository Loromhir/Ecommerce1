import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have some questions?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img src="/assets/images/message.png" alt="Contact Us" />
          </div>
          <div className="col-md-6">
            <form >
              <form>
              <div class="mb-3">
                  <label for="InputEmail1" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="InputName" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="InputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className='mb-3'>
                  <label for="formControlInput" className='form-label'>Text</label>
                  <textarea className='form-control' id='formControlInput1' rows='5' ></textarea>
                </div>
                <button type="submit" class="btn btn-outline-primary">Send message</button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact