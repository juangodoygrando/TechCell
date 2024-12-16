import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import SpinnerLoader from "./SpinnerLoader";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [producto, setProducto] = useState({});
  const { id } = useParams();


  useEffect(() => {
    setLoading(true)

    const collectionProducts = collection(db,"productos")

    const docRef= doc(collectionProducts,id)

    getDoc(docRef)
    .then((resp)=> setProducto({id: resp.id, ...resp.data()}))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))


  },[])
  
  return (
    <div>
      {loading  ? <SpinnerLoader/> : <ItemDetail producto={producto} />
      }
    </div>
  );
};

export default ItemDetailContainer;
