import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useCart } from '../context/CartContext'


const CartItem = ({ productos }) => {
  const {removeItem}=useCart()

  






  return (
    <div className="cartCard">
      <Card className="d-flex flex-row my-3 cardForm" >
        <Card.Img
          src={productos.imagen}
          alt={productos.nombre}
          style={{
            width: "19rem",
            height: "auto",
            margin: "1rem",
            border: "black",
          }}
        />
        <Card.Body>
          <div className="d-flex mb-2 ">
            <Card.Header
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                flex: "0 0 90%",
                border: "1px solid black",
                padding: "0.5rem 1rem",
              }}
            >
              {productos.nombre}
            </Card.Header>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                flex: "0 0 10%",
              }}
            >
              <Button onClick={() => removeItem(productos.id)}
                variant="danger"
                style={{
                  height: "100%",
                  fontSize:"1.5rem",
                }}
              >
                X
              </Button>
            </div>
          </div>

          <Card.Text style={{ fontSize: "1.19rem", margin: "1rem" }}>
            {productos.descripcion}
          </Card.Text>
          <Card.Title style={{ fontSize: "1.19rem", margin: "1rem" }}>
            Cantidad:{productos.cantidad}
          </Card.Title>

          <Card.Text style={{ fontSize: "0.8rem", margin: "1rem" }}>
            *2 años de garantía comercial
          </Card.Text>
          <Card.Title className="text-end">Precio unitario:€{productos.precio}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItem;
