import React from 'react'

function Register(props) {
  return (
    <div className='container p-3 card mt-4'>
      <form onSubmit={props.submit}>
        <h1 className='text-center'>Registration form</h1>
        <div className='form-group'  >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required className='form-control' />
        </div>
        <div className='form-group'  >
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" required className='form-control' />
        </div>
        <div className='form-group'  >
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required className='form-control' />
        </div>
        <button type='submit' className='btn btn-primary'>Register</button>
      </form>
    </div>
  )
}

export default Register
