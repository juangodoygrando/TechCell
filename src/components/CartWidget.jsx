import { BsBag } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { useCart } from "../context/CartContext";


const CartWidget=({harcodeado})=>{

 const {cart}=useCart

    return(
        <div >
          <Button className= "carrito">
            <BsBag className="bsBag"fontSize={'1.8rem'} color='black'/> 
            <Badge className="badge bg-primary  fs-6 mt-1" bg="danger" text="dark">{harcodeado}</Badge>
          </Button>
        </div>
    )
}

export default CartWidget