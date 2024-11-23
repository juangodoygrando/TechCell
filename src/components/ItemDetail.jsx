import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste a la cesta ${cantidad} productos`);
  };

  return (
    <div className="itemDetail">
      <h1>Detalle del producto:{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.imagen} />
      <p className="fs-3">{producto.descripcion}</p>
      <p className="fs-1">€ {producto.precio}</p>
      <ItemCount stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
