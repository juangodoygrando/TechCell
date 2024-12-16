import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext,useCart} from "../context/CartContext";
import { Button } from "react-bootstrap";

const ItemDetail = ({ producto }) => {
  const [compra, SetCompra] = useState(false);
  /* const { addToCart } = useContext(CartContext);
 */
const {addToCart,stockEnCarrito}=useCart()
  const onAdd = (cantidad) => {
    SetCompra(true);
    addToCart(producto, cantidad);
  };

  const stockActualizado= producto.stock - stockEnCarrito(producto.id)

  return (
    <div className="itemDetail">
      <h1 className="fs-1 fw-bold">Detalle del producto: {producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.imagen} />
      <p className="fs-3">{producto.descripcion}</p>
      <p className="fs-1">€ {producto.precio}</p>
      {compra ? (
        <Button to={`/cart`} as={Link} className="irAlCarrito">
          Ir al carrito
        </Button>
      ) : (
        <ItemCount stock={stockActualizado} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
