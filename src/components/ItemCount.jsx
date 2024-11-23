import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(0)

    const sumar=()=>{
        if(count<stock){
        setCount(count+1)}
    }
    
    const restar=()=>{
        if(count>0){
            setCount(count-1)
        }
    }

    const onAddNumber=()=>{
        onAdd(count);
    }


  return (
    
    <div className='itemCount'>
    <div className='btnSumaResta'>
        <Button variant="outline-dark" className='btnResta' onClick={restar}>-</Button>
        <span className="count">{count}</span>
        <Button variant="outline-dark"className='btnSuma' onClick={sumar}>+</Button>
    </div>
    <Button variant="warning" className='btnAñadirCesta'onClick={onAddNumber} disabled={count === 0}>Añadir a la cesta</Button>
    </div>
  )
}

export default ItemCount
