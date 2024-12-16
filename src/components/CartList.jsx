import React from 'react'
import CartItem from './CartItem'
import { useCart } from '../context/CartContext'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartList = () => {
    const {cart,totalCarrito,borrarCarrito}=useCart()

  return (
    <div>{cart.map((productos)=> <CartItem productos={productos} key={productos.id}/>)}
        <span>Total: $ {totalCarrito()}</span>
        <div>
            <Button  variant='danger' onClick={borrarCarrito}>Borrar Carrito</Button>
            <Button to={`/checkout`}
        as={Link} variant='danger'>Terminar Compra</Button>
        </div>
    </div>
  )
}

export default CartList