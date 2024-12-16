import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card-container">
      <Card className="card-uniform">
        <Card.Img
          variant="top"
          src={product.imagen}
          className="card-img-uniform"
        />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Title>€{product.precio}</Card.Title>
          <Button
            to={`/item/${product.id}`}
            as={Link}
            className="btnMasDetalles border-3"
          >
            Más detalles
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
