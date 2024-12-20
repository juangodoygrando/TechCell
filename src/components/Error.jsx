import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10",
      }}
    >
      <img
        src="https://i.postimg.cc/prqtnbK4/MOVI-Pin-de-Pinterest.png"
        alt="Error 404"
        style={{
          width: "80%",
          maxHeight: "700px",
          objectFit: "contain",
        }}
      />
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
  );
};

export default Error;
