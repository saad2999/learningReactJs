import React from 'react'
import styled from 'styled-components';

function Register(props) {
  
  
  let btnText;
  let PasswordBoxType;
  let btnClasses=["btn","m-4"]
  if(props.showPassword===true){
    btnClasses.push("btn-danger")
    btnText="Hide Password";
    PasswordBoxType="text";
    
  }
  else
  {
    btnText="Show Password";
    PasswordBoxType="password"
    btnClasses.push("btn-success")
  }
  let StyledButton = styled.button`
  display: block;
  padding: 10px, 5px;
  background-color: orange;
  color:white
  border: none;
  width: 100%;
  margin: 5px;
  `;

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
          <input type={PasswordBoxType} name="password" required className='form-control' />
        </div>
        <button type='submit' className='btn btn-primary'>Register</button>
        <button type="button" class={btnClasses.join(" ")} onClick={props.click}>{btnText}</button>
        <StyledButton type="button">login</StyledButton>
      </form>
    </div>
  )
}

export default Register
