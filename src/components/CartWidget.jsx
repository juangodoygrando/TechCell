import { BsBag } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
const CartWidget=({harcodeado})=>{
    return(
        <div >
          <Button variant="warning">
            <BsBag className="bsBag"fontSize={'1.8rem'} color='black'/> 
            <Badge className="badge bg-primary  fs-6 mt-1" bg="warning" text="dark">{harcodeado}</Badge>
          </Button>
        </div>
    )
}

export default CartWidget