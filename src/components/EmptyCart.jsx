import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
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
        src="https://i.postimg.cc/rwLwXcQC/MOVI-A2-horizontal-4.png"
        alt="Vende tu tech"
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
        Ir a comprar
      </Button>
    </div>
  );
};

export default EmptyCart;
