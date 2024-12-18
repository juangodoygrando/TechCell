import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";


const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { cart, totalCarrito, borrarCarrito } = useContext(CartContext);

  const onSubmit = (data) => {
    const orders = {
      buyer: {
        name: data.nombre,
        surname: data.apellido,
        mobile: data.movil,
        email: data.email,
        address: {
          street: data.calle,
          number: data.numero,
          floor: data.piso,
          door: data.puerta,
          postalCode: data.codigoPostal,
          locality: data.localidad,
          province: data.provincia,
        },
      },
      cart: cart,
      total: totalCarrito(),
      date: serverTimestamp(),
    };

    const ventas = collection(db, "orders");
    addDoc(ventas, orders)
      .then((resp) => {
        setOrderId(resp.id);
        borrarCarrito();
      })
      .catch((error) => console.log("Error al enviar la orden: ", error));
  };

  const email = watch("email", "");

  return (
    <div>
      {orderId ? (
        <div className="container mt-5 text-center">
          <h2>Gracias por tu compra</h2>
          <img src="https://i.postimg.cc/wxLjYmWw/MOVI-A2-horizontal-6.png" alt="imagenCompraRealizada" />
          <h3>Tu número de orden es: {orderId}</h3>
        </div>
      ) : (
        <div className="container mt-5">
          <h2>Completa con tus datos para finalizar la compra</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Card className="mb-3 cardForm" variant="danger">
              <Card.Body>
                <h4>Datos Personales</h4>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    {...register("nombre", {
                      required: "El nombre es obligatorio",
                      minLength: { value: 2, message: "Mínimo 2 caracteres" },
                    })}
                  />
                  {errors.nombre && (
                    <p className="text-danger">{errors.nombre.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu apellido"
                    {...register("apellido", {
                      required: "El apellido es obligatorio",
                      minLength: { value: 2, message: "Mínimo 2 caracteres" },
                    })}
                  />
                  {errors.apellido && (
                    <p className="text-danger">{errors.apellido.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Número de Móvil</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Número móvil"
                    {...register("movil", {
                      required: "El móvil es obligatorio",
                      pattern: {
                        value: /^[0-9]{9,12}$/,
                        message: "Debe contener entre 9 y 12 dígitos",
                      },
                    })}
                  />
                  {errors.movil && (
                    <p className="text-danger">{errors.movil.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu email"
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Formato de email no válido",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Confirmar Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Confirma tu email"
                    {...register("confirmarEmail", {
                      required: "Debes confirmar el email",
                      validate: (value) =>
                        value === email || "Los emails no coinciden",
                    })}
                  />
                  {errors.confirmarEmail && (
                    <p className="text-danger">
                      {errors.confirmarEmail.message}
                    </p>
                  )}
                </Form.Group>
              </Card.Body>
            </Card>

            <Card className="mb-3 cardForm" variant="danger">
              <Card.Body>
                <h4>Dirección</h4>
                <Form.Group className="mb-3">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre de la calle"
                    {...register("calle", {
                      required: "La calle es obligatoria",
                    })}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>Número</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Número"
                        {...register("numero", {
                          required: "El número es obligatorio",
                        })}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Piso</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Piso"
                        {...register("piso")}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Puerta</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Puerta"
                        {...register("puerta")}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Código Postal</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Código postal"
                        {...register("codigoPostal", {
                          required: "El código postal es obligatorio",
                        })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>Localidad</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Localidad"
                        {...register("localidad", {
                          required: "La localidad es obligatoria",
                        })}
                      />
                      {errors.localidad && (
                        <p className="text-danger">
                          {errors.localidad.message}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Provincia</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Provincia"
                        {...register("provincia", {
                          required: "La provincia es obligatoria",
                        })}
                      />
                      {errors.provincia && (
                        <p className="text-danger">
                          {errors.provincia.message}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Button variant="danger" to={`/cart`} as={Link}>
              Volver al carrito
            </Button>
            <Button variant="danger mx-2" type="submit">
              Confirmar compra
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
