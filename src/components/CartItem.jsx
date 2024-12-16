import React from "react";
import Card from "react-bootstrap/Card";

const CartItem = ({ productos }) => {
  return (
    <div className="cartCard">
      <Card className="d-flex flex-row" border="danger">
        <Card.Img
          src={productos.imagen}
          alt={productos.nombre}
          style={{ width: "19rem", height: "auto" }}
        />
        <Card.Body>
          <Card.Header>{productos.nombre}</Card.Header>
          <Card.Title>{productos.category}</Card.Title>
          <Card.Text>{productos.descripcion}</Card.Text>
          <Card.Text>
            <small className="text-muted">*2 años de garantía comercial</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItem;
