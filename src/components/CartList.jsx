import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartList = () => {
  const { cart, totalCarrito, borrarCarrito } = useCart();

  const calcularSubtotal = () => {
    return cart.reduce((acc, producto) => {
      const precioSinIva = producto.precio / 1.21;
      return acc + precioSinIva * producto.cantidad;
    }, 0);
  };

  const calcularIva = () => {
    return cart.reduce((acc, producto) => {
      const iva = producto.precio - (producto.precio / 1.21);
      return acc + iva * producto.cantidad;
    }, 0);
  };

  const calcularTotal = () => {
    return cart.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  };

  return (
    <div>
      {cart.map((productos) => (
        <CartItem productos={productos} key={productos.id} />
      ))}

      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="p-5 fs-4 cardForm">
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal:</span>
            <span>$ {calcularSubtotal().toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>IVA (21%):</span>
            <span>$ {calcularIva().toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <strong>Total:</strong>
            <strong>$ {calcularTotal().toFixed(2)}</strong>
          </div>
        </div>

        <div>
          <Button variant="danger mx-2 fs-4" onClick={borrarCarrito}>Borrar Carrito</Button>
          <Button to="/checkout" as={Link} variant="danger mx-2 fs-4">Terminar Compra</Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
