import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onAddNumber = () => {
    onAdd(count);
  };

  return (
    <div className="itemCount">
      <div className="btnSumaResta">
        <Button className="btnResta border-0" onClick={restar}>
          -
        </Button>
        <span className="count">{count}</span>
        <Button className="btnSuma border-0" onClick={sumar}>
          +
        </Button>
      </div>
      <Button
        className="btnAñadirCesta border-0"
        onClick={onAddNumber}
        disabled={count === 0 || stock === 0}
      >
        Añadir a la cesta
      </Button>
    </div>
  );
};

export default ItemCount;
