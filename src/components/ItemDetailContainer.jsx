import React, { useEffect, useState } from 'react'
import { getProducts} from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const {id}= useParams()
    
     useEffect(()=>{
      getProducts(id)
      .then((res)=> setProducto(res.find((item)=> item.id == id)))
      .catch((error)=>console.log(error))
     },[])
    
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer