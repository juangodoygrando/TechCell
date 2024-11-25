import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {

  const [compra,SetCompra]= useState(false)
  const {addToCart}=useContext(CartContext)

  const onAdd = (cantidad) => {
    SetCompra(true)
    let cartItem={
      id:producto.id,
      name:producto.nombre,
      img:producto.imagen,
      precio:producto.precio,
    }
    addToCart(producto, cantidad)

  };

  return (
    <div className="itemDetail">
      <h1>Detalle del producto:{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.imagen} />
      <p className="fs-3">{producto.descripcion}</p>
      <p className="fs-1">€ {producto.precio}</p>
      {compra 
      ? <NavLink className='btn-black'>Ir al carrito</NavLink> : <ItemCount stock={producto.stock} onAdd={onAdd} />}
    </div>
  );
};

export default ItemDetail;
