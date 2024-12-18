import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button} from 'react-bootstrap'


const  VendeTuTech = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'10'}}>
        <img src="https://i.postimg.cc/yxcJH4Sd/MOVI-A2-horizontal-5.png" alt="Vende tu tech" />
        
        <Button to='/' as={NavLink} variant="danger" style={{width:'75%', marginTop:'30px',fontSize:'3rem', fontWeight:'bold'}}>Volver al inicio</Button>
    </div>
  )
}

export default VendeTuTech