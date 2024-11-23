import React from 'react'
import Item from './Item'

const ItemList = ({products, onAdd}) => {
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap'>
        {products.map((product)=> <Item product={product} key={product.id}/>)}
    </div>
  )
}

export default ItemList