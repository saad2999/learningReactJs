import React from 'react'

function Greet(props) {
  return (
    <div className='container p-3 card mt-4 text-center'>
       <h3 >{props.name}</h3>
      <h3 >Thank you for joining us</h3>
      <h3 >verfication send to {props.email}</h3>
      
    </div>
  )
}

export default Greet
