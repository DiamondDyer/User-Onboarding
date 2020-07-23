import React from 'react'

function Team({ details }) {
  if (!details) {
    return <h3>Getting New User...</h3>
  }

  return (
    <div >
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Terms of Service: {details.terms}</p>
     
   

    </div>
  )
}

export default Team
