import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebase";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";

const Cheackout = () => {
  const [user, setUser] = useState({});
  const [validate, setValidate] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, totalCarrito, borrarCarrito } = useContext(CartContext);

  const userData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (!user.name || !user.lastname || !user.email || !user.address) {
      alert("Los campos son obligatrorios");
    } else if (user.email !== validate) {
      alert("Los email deben ser iguales");
    } else {
      let orders = {
        customer: user,
        cart: cart,
        total: totalCarrito(),
        date: serverTimestamp(),
      };
      const ventas = collection(db, "orders");
      addDoc(ventas, orders)
        .then((resp) => {
          cart.forEach((item) => {
            const docRef = doc(db, "productos", item.id);
            getDoc(docRef).then((dbDoc) => {
              updateDoc(docRef, { stock: dbDoc.data().stock - item.cantidad });
            });
          });
          setOrderId(resp.id);
          borrarCarrito();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {orderId !== "" ? (
        <div>
          <h2>Orden confirmada</h2>
          <h3>El numero de referencia de tu compra es: ${orderId}</h3>
          <Button
            to="/"
            as={NavLink}
            variant="danger"
            style={{
              width: "75%",
              marginTop: "30px",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            Volver al inicio
          </Button>
        </div>
      ) : (
        <div>
          <h4>Completa los datos para la compra</h4>
          <Form onSubmit={finalizarCompra}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" onChange={userData} />

              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" name="lastname" onChange={userData} />

              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={userData} />

              <Form.Label>Repetir Email</Form.Label>
              <Form.Control
                type="email"
                name="repeatEmail"
                onChange={(e) => setValidate(e.target.value)}
              />

              <Form.Label>Direccion de envio</Form.Label>
              <Form.Control type="text" name="address" onChange={userData} />
            </Form.Group>
            <Button variant="danger" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Cheackout;
