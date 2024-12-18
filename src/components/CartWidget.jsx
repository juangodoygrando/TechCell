import { BsBag } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useCart();

  return (
    <div>
      <Button className="carrito">
        <BsBag className="bsBag" fontSize={"2.2rem"} />
        {cartQuantity() > 0 && (
          <Badge className="badge ">{cartQuantity()}</Badge>
        )}
      </Button>
    </div>
  );
};

export default CartWidget;
