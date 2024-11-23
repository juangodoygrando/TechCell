import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="" style={{ width: "18rem", marginTop: 10 }}>
      <Card>
        <Card.Img variant="top" src={product.imagen} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>

          <Card.Title>€{product.precio}</Card.Title>
          <Button
            to={`/item/${product.id}`}
            as={Link}
            variant="secondary"
            size=" "
          >
            Mas detalles
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
