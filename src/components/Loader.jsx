import React from 'react'
import {BounceLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div style={
        {width:'100%',
        height:'80vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'}
    }>
       <BounceLoader color="rgba(46, 37, 36, 1)" size={110} />

    </div>
  )
}

export default Loader
