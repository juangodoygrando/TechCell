import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Error = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'10'}}>
        <img src="../../public/Nofound404.jpg" alt="Error 404" style={{width:'60%', margin:'20'}}/>
        <Button to='/' as={NavLink} variant="warning" style={{width:'75%', marginTop:'30px',fontSize:'3rem', fontWeight:'bold'}}>Volver al inicio</Button>
    </div>
  )
}

export default Error